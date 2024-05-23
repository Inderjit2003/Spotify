const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const User = require('../models/User'); // Import the User model
const Song = require('../models/Song');
const musicMetadata = require('music-metadata');

router.use(cors());

// Serve static files from the specified directory
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure the uploads directories exist
const uploadAudioDir = 'D:/Project Spotify/backend/uploads/audio/song';
const uploadImageDir = 'D:/Project Spotify/backend/uploads/images/song';
if (!fs.existsSync(uploadAudioDir)) {
  fs.mkdirSync(uploadAudioDir, { recursive: true });
}
if (!fs.existsSync(uploadImageDir)) {
  fs.mkdirSync(uploadImageDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/')) {
      cb(null, uploadAudioDir);
    } else if (file.mimetype.startsWith('image/')) {
      cb(null, uploadImageDir);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/uploadSong', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    console.log('File uploaded:', req.file);

    // Extract metadata using music-metadata library
    const metadata = await musicMetadata.parseFile(req.file.path);
    console.log('Metadata extracted:', metadata);

    // Handle image extraction
    let imageURL = '/uploads/default_image.jpg'; // Default image URL
    if (metadata.common.picture && metadata.common.picture.length > 0) {
      const picture = metadata.common.picture[0];
      const imageFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`;
      const imagePath = path.join(uploadImageDir, imageFilename);

      // Save the image file
      fs.writeFileSync(imagePath, picture.data);

      imageURL = `/uploads/images/song/${imageFilename}`;
    }

    const { title, artist, album, colorcode } = req.body;
    console.log('Request body:', req.body);

    // Save file metadata to MongoDB
    const song = new Song({
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      colorcode,
      title,
      artist,
      album,
      imageURL,
      audioURL: `/uploads/audio/song/${req.file.filename}`,
      duration: metadata.format.duration // Example duration from metadata
      
    });

    await song.save();
    console.log('File metadata saved to MongoDB:', song);
    res.status(201).send('File uploaded successfully.');
  } catch (err) {
    console.error('Error saving file metadata:', err);
    res.status(500).send('Server error.');
  }
});

router.get('/', async (req, res) => {
  try {
    const files = await Song.find();
    console.log(files);
    res.render('Songs', { files });
  } catch (err) {
    console.error('Error fetching files:', err);
    res.status(500).send('Server error.');
  }
});

router.get('/api/songs', async (req, res) => {
  try {
    const songsData = await Song.find({});
    const songsWithUrls = songsData.map(song => ({
      ...song._doc,
      audioURL: `http://localhost:3000/uploads/audio/song/${song.filename}`,
    imageURL: `http://localhost:3000${song.imageURL}`,
    }));

   // Log songsWithUrls before sending the response
   console.log('Songs with URLs:', songsWithUrls);


    res.json(songsWithUrls);
  } catch (error) {
    console.error('Error fetching songs data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve uploaded files
router.use('/uploads/audio', express.static(uploadAudioDir));
router.use('/uploads/images/song', express.static(uploadImageDir));

module.exports = router;

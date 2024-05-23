const express = require('express');
const router = express.Router();
const moment = require('moment');
const Album = require('../models/Album'); 

router.get('/', async (req, res) => {
  try {
    const album = await Album.find();
    const formattedAlbums = album.map(album => ({
      ...album._doc,
      formattedReleaseDate: moment(album.releasedate).format('ddd MMM DD YYYY')
  }));
    res.render('album', {title:'Album' ,albums: formattedAlbums});
  } catch (err) {
    console.error('Error fetching files:', err);
    res.status(500).send('Server error.');
  }
});

router.post('/addalbum', async (req, res) => {
    try {
      const { album, image, releasedate } = req.body;
       // Extract only the date part from the releasedate
       const releaseDate = new Date(releasedate);
       const dateOnly = new Date(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());

      console.log('Request body:', req.body); // Log the entire request body for debugging
  
      // Save file metadata to MongoDB
      const newAlbum = new Album({ album, image,releasedate: dateOnly });
  
      await newAlbum.save();
      console.log('File metadata saved to MongoDB:', newAlbum);
      res.status(201).send('Album added successfully.');
    } catch (err) {
      console.error('Error saving file metadata:', err);
      res.status(500).send('Server error.');
    }
  });
  
module.exports = router;

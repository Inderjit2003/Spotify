const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist'); 

router.get('/', async (req, res) => {
  try {
    const artist = await Artist.find();
    res.render('artist', {title:'Artist' ,artist });
  } catch (err) {
    console.error('Error fetching files:', err);
    res.status(500).send('Server error.');
  }
});

router.post('/addartist', async (req, res) => {
    try {
      const { artist, image, bio } = req.body;
      console.log('Request body:', req.body); // Log the entire request body for debugging
  
      // Save file metadata to MongoDB
      const newArtist = new Artist({ artist, image, bio });
  
      await newArtist.save();
      console.log('File metadata saved to MongoDB:', newArtist);
      res.status(201).send('Artist added successfully.');
    } catch (err) {
      console.error('Error saving file metadata:', err);
      res.status(500).send('Server error.');
    }
  });
  
module.exports = router;

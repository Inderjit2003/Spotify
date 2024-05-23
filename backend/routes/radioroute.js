const express = require('express');
const router = express.Router();
const Radio = require('../models/Radio'); 

router.get('/', async (req, res) => {
  try {
    const radio = await Radio.find();
    res.render('radio', {title:'Radio' , radio});
  } catch (err) {
    console.error('Error fetching files:', err);
    res.status(500).send('Server error.');
  }
});

router.post('/addradio', async (req, res) => {
    try {
      const { artist, image,title } = req.body;
      console.log('Request body:', req.body); // Log the entire request body for debugging
  
      // Save file metadata to MongoDB
      const newRadio = new Radio({ artist, image, title });
  
      await newRadio.save();
      console.log('File metadata saved to MongoDB:', newRadio);
      res.status(201).send('Artist added successfully.');
    } catch (err) {
      console.error('Error saving file metadata:', err);
      res.status(500).send('Server error.');
    }
  });
  
module.exports = router;

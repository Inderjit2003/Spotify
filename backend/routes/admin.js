const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const User = require('../models/User'); // Import the User model
const Song = require('../models/Song');
const { title } = require('process');


// Serve static files from the specified directory
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define the upload directory
const uploadImageUserDir = 'D:/Project Spotify/backend/uploads/images/user';

// Ensure the upload directory exists
if (!fs.existsSync(uploadImageUserDir)) {
    fs.mkdirSync(uploadImageUserDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: uploadImageUserDir, // Use the defined upload directory
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/',(req,res) =>{
    res.render('dashboard',{ title: 'Dashboard'} );
})

router.get('/login',(req,res) =>{
    res.render('login', { title: 'login' });
})



//getting user data 
router.get('/user', async (req, res) => {
    try {
      const userData = await User.find({});
      console.log('User Data:', userData); // Debug statement
      res.render('user',{ title: 'Dashboard',userData });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/adduser', upload.single('userimg'), async(req,res) =>{
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      try {
        const { username, email, password } = req.body;
        const imageURL = '/uploads/images/user/' + req.file.filename; // Image URL for the uploaded file
        const user = {username,email,password,image:imageURL}
        // Create a new user instance with image URL
        const newUser = new User(user);

        // Save the user to MongoDB
        await newUser.save();
        res.status(201).send('User created successfully.');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Server error.');
    }
});



module.exports = router;
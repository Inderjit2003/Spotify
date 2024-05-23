const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image: {
    type: String,
    // default: 'default_image_url.jpg' // Set your default image URL here
  },
  createDate: {
    type: Date,
    default: Date.now // Automatically set create date to current date
  },
  updateDate: {
    type: Date,
    default: Date.now // Automatically set update date to current date
  }
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;

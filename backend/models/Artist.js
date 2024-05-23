const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, 'Artist name is required']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required']
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
updateDate: {
    type: Date,
    default: Date.now,
  }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;

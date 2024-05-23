const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  album: {
    type: String,
    required: [true, 'Title is required']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  releasedate: {
    type: Date,
    required: [true, 'release date is required']
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

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

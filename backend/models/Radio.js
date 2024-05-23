const mongoose = require('mongoose');

const radioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
  artist: {
    type: String,
    required: [true, 'Artist name is required']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
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

const Radio = mongoose.model('Radio', radioSchema);

module.exports = Radio;

const mongoose =  require('mongoose');

const songSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalname: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  imageURL: { type: String},
  audioURL: { type: String, required: true },
  duration: { type: Number, required: true },
  colorcode: { type: String },
    createDate: {
        type: Date,
        default: Date.now,
      },
    updateDate: {
        type: Date,
        default: Date.now,
      }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
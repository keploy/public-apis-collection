const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  category: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meme", memeSchema);

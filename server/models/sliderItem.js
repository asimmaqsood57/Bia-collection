const mongoose = require("mongoose");

const sliderItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const sliderItem = mongoose.model("sliderItems", sliderItemSchema);

module.exports = sliderItem;

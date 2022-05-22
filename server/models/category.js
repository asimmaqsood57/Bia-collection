const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
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

  date: {
    type: Date,
    default: Date.now,
  },
});

const category = mongoose.model("category", categorySchema);

module.exports = category;

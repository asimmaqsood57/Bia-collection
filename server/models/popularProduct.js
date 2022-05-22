const mongoose = require("mongoose");

const popularProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const popularProduct = mongoose.model("popularProduct", popularProductSchema);
module.exports = popularProduct;

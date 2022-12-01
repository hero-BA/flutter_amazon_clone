// Contain the structure of the rating
const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Whenever we need just a structure, we don't need to provide a model
module.exports = ratingSchema;

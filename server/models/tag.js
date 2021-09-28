const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const { Post } = require("./Post");

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;

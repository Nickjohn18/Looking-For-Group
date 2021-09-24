const { Schema, model } = require("mongoose");
const { Post } = require("./Post");

const tagSchema = new Schema({
  genre: {
    type: String,
  },

  name: {
    type: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Tag = model("Tag", tagSchema);
module.exports = Tag;

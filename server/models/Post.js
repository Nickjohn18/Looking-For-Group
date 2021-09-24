const dateFormat = require("../utils/dateFormat");
const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    gamerTag: {
      type: String,
      required: true,
    },
    userPost: {
      type: String,
      required: "You need to post something!",
      minlength: 1,
      maxlength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },

    genreTag: {},

    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

postSchema.virtual("commentCount").get(function () {
  return this.reactions.length;
});

const Post = model("Post", postSchema);

module.exports = Post;

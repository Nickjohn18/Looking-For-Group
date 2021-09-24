const { AuthenticationError } = require("apollo-server-express");
const Users = require("../models/Users");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Users.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("userPosts")
          .populate("comments")
          .populate({
            path: "tags",
            populate: { path: "posts", model: "Post" },
          });

        return userData;
      }
      throw new AuthenticationError("Please login");
    },
    users: async () => {
      return User.Find()
        .select("-__v -password")
        .populate("userPosts")
        .populate("comments");
    },
    user: async (parent, { username }) => {
      return Users.findOne({ username })
        .select("-__v -password")
        .populate("userPosts")
        .populate("comments");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
        return post;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedPost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    getPost: async (parent, { tagGenre }) => {},
  },
};

module.exports = resolvers;
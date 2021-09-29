const db = require("./connection");
const { User, Post } = require("../models");
const faker = require("faker");

db.once("open", async () => {
  await Post.deleteMany({});

  await User.deleteMany();
  var post = await Post.create({
    postText: "test test work work",
    username: "pamela",
  });

  var user = await User.create({
    username: "pamela",
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    posts: [post._id],
    password: "password12345",
  });

  await User.create({
    username: "elijah",
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});

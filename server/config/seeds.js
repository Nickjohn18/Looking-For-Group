const db = require("./connection");
const { User, Post } = require("../models");
const faker = require("faker");

db.once("open", async () => {
  await Post.deleteMany({});

  await User.deleteMany();

  await User.create({
    username: "pamela",
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
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

  await Post.create({
    postText: "test test work work",
    username: "pamela",
  });

  process.exit();
});

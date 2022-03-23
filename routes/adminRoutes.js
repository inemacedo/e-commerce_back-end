const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const authController = require("../controllers/authController");


publicRouter.get("/users", userController.getAllUsers);

publicRouter.get("/users/:username", userController.getUser);

publicRouter.post("/users", userController.store);

publicRouter.get("/tweets/random", tweetController.getAllTweets);

publicRouter.get("/tweets/:id", tweetController.getTweet);

publicRouter.post("/tokens", authController.newToken);

module.exports = publicRouter;

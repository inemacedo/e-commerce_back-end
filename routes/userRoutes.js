const express = require("express");
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const checkJwt = require("express-jwt");
const privateRouter = express.Router();

// Rutas Privadas (implica estar logeado):
privateRouter.use(
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })
);

// USERS ROUTES:

// Update User data
privateRouter.patch("/users", userController.update);

// Update User image
privateRouter.post("/users/img-profile", userController.imgProfile);

// Toggle follower on user
privateRouter.post("/users/:id/follow", userController.follow);

// TWEETS ROUTES:

privateRouter.get("/tweets", tweetController.getInterestedTweets);

// Post a new Tweet
privateRouter.post("/tweets", tweetController.store);

// Update a Tweet
// privateRouter.put("/tweets/:id", tweetController.update );

// Delete a Tweet
privateRouter.delete("/tweets/:id", tweetController.destroy);

// Toggle Like on a Tweet
privateRouter.patch("/tweets/:id", tweetController.toggleLike);

module.exports = privateRouter;

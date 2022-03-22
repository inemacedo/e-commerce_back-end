const mongoose = require("mongoose");
const userSchema = require("./User");
const tweetSchema = require("./Tweet");

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = { User, Tweet }

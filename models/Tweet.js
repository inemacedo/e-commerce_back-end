const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = new Schema(
  {
    content: {
      type: String,
      maxLength: 140,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true },
);

module.exports = Tweet;

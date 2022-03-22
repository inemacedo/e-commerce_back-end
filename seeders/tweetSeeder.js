const { faker } = require("@faker-js/faker");
const { User, Tweet } = require("../models");
const numberOfTweets = 40;
const averageLikesPerUser = 2;

faker.locale = "es";

module.exports = async () => {
  console.log("creando los usuarios");
  await Tweet.deleteMany();
  const users = await User.find();
  const tweets = [];
  const chanceTweetIsLiked = numberOfTweets / averageLikesPerUser;
  for (let i = 0; i < numberOfTweets; i++) {
    let popularityWeight = (5 / 31) * (Math.random() + 1) ** 4;
    let randomIndex = Math.floor(Math.random() * users.length);
    let user = users[randomIndex];
    let content = faker.lorem.sentences();
    let likedBy = [];
    for (const user of users) {
      const number = Math.floor(
        (Math.random() * chanceTweetIsLiked) / popularityWeight
      );
      if (number === 0) {
        likedBy.push(user.id);
      }
    }
    while (content.length > 140) {
      content = faker.lorem.sentences();
    }
    let tweet = new Tweet({
      content,
      author: user,
      likedBy,
    });
    tweets.push(tweet);
    await User.findByIdAndUpdate(user.id, { $push: { tweets: tweet } });
  }

  await Tweet.create(tweets);
  console.log("Se corrió el seeder de Tweets.");
};

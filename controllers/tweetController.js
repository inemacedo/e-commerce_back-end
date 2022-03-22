const { Tweet, User } = require("../models");

async function getTweet(req, res) {
  try {
    const tweet = await Tweet.findById(req.params.id).populate("author");
    res.json(tweet);
  } catch (error) {
    res.status(400).json({ msg: "Error" });
  }
}

async function getAllTweets(req, res) {
  try {
    const page = req.query.page;
    const skip = (page - 1) * 10;
    const tweet = await Tweet.find().skip(skip).populate("author").limit(10);
    res.json(tweet);
  } catch (error) {
    res.status(400).json({ msg: "Error" });
  }
}

async function getInterestedTweets(req, res) {
  try {
    const page = req.query.page;
    const skip = (page - 1) * 10;

    const user = await User.findById( req.user.userID, "following" );
    const tweets = await Tweet.find()
      .where("author")
      .in(user.following)
      .skip(skip)
      .populate("author")
      .limit(10);
    
    res.json(tweets);
  } catch (error) {
    res.status(400).json({ msg: "Error" });
  }
}

async function store(req, res) {
  const { content } = req.body;
  const authorID = req.user.userID;
  try {
    const tweet = new Tweet({
      author: authorID,
      content,
      likedBy: [],
    });
    await tweet.save();
    await User.findByIdAndUpdate(authorID, { $push: { tweets: tweet } });
    console.log("Un tweet ha sido creado");
    const populatedTweet = await Tweet.findById(tweet["_id"]).populate(
      "author"
    );
    res.json(populatedTweet);
  } catch (err) {
    res.json({ msg: "Error" });
  }
}

/*async function update(req, res) {
  const { content } = req.body;
  const author = req.user;
  console.log( author );
  try {
    const tweet = new Tweet({
      author,
      content,
      likedBy: [],
    });
    await tweet.save();
    await User.findByIdAndUpdate(author, { $push: { tweets: tweet } });
    console.log("Un tweet ha sido creado");
    res.json({ msg: "OK" });
  } catch(err) {
    res.json({ msg: "Error" })
  }
}*/

// populate options match:
//{
//   path: "likedBy",
//   match: { _id: req.user.id }
// }

async function toggleLike(req, res) {
  try {
    const tweet = await Tweet.findById(req.params.id);

    if (tweet.likedBy.includes(req.user.userID)) {
      tweet.likedBy.pull(req.user.userID);
      tweet.save();
      res.status(200).json({ msg: "Ya no te gusta este tweet" });
    } else {
      tweet.likedBy.push(req.user.userID);
      tweet.save();
      res.status(200).json({ msg: "Ahora te gusta este tweet" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Ocurrió un error" });
  }

  // tengo que consultar en la base de datos si el user le dio like al tweet
  // si se encuentra en la lista de likes, lo saco.
  // De lo contrario lo agrego a la lista de likes.
}

async function destroy(req, res) {
  const tweetId = req.params.id;
  try {
    const user = await User.findById(req.user.userID);
    if (user.tweets.includes(tweetId)) {
      await Tweet.findByIdAndDelete(tweetId);
      await User.findByIdAndUpdate(req.user.userID, {
        $pull: { tweets: tweetId },
      });
      console.log("Un tweet ha sido borrado");
      res.json({ msg: "Ok. Tweet borrado" });
    } else {
      res.status(401).json({ msg: "No tienes permiso para borrar este tweet" });
    }
  } catch (err) {
    res.status(400).json({ msg: "Error" });
  }
}

module.exports = {
  getTweet,
  getAllTweets,
  getInterestedTweets,
  store,
  /*update,*/
  destroy,
  toggleLike,
};

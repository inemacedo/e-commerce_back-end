
let user;

if(includeTweets || includeFollows){
  if(includeTweets && includeFollows){
    user = await User.findOne({
      username: req.params.username,
    })
      .populate({ path: "tweets", limit: 10 })
      .populate("following")
      .populate("followers")
  }
  else if(includeTweets){ // solo include tweets
    user = await User.findOne({
      username: req.params.username,
    }).populate({ path: "tweets", limit: 10 })
  }
  else { // solo include follows
    user = await User.findOne({
      username: req.params.username,
    })
      .populate("following")
      .populate("followers")
  }
}else {
  user = await User.findOne({
    username: req.params.username,
  });
}


res.json(user);
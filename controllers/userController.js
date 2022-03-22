const { User } = require("../models");

// Get one user from storage.
async function getUser(req, res) {
  const includeTweets = req.query.tweets;
  const includeFollows = req.query["followers-and-following"];
  try {
    const user = includeTweets
      ? includeFollows
        ? await User.findOne({
            username: req.params.username,
          })
            .populate({ path: "tweets", limit: 10 })
            .populate("following")
            .populate("followers")
        : await User.findOne({
            username: req.params.username,
          }).populate({ path: "tweets", limit: 10 })
      : includeFollows
      ? await User.findOne({
          username: req.params.username,
        })
          .populate("following")
          .populate("followers")
      : await User.findOne({
          username: req.params.username,
        });

      user.followers.map( elem=> delete elem.password );
      user.following.map( elem=> delete elem.password );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "error", msg: "user not found" });
  }
}

// Get all users from storage.
async function getAllUsers(req, res) {
  try {
    const user = await User.find().limit(10);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "error", msg: "user not found" });
  }
}

// Store created user in storage.
async function store(req, res) {
  console.log(req.body);
  // const newUser = { username: req.body.username };
  try {
    const userNameExists = await User.findOne({ username: req.body.username });
    if (userNameExists) {
      res
        .status(409)
        .json({ msg: "Username already in use, pick another one." });
    } else {
      const user = await User.create({
        ...req.body,
        image: `img${Math.floor(3 * Math.random())}.png`,
      });
      res.json({ user, msg: "User created succesfully" });
    }
  } catch (error) {
    res.status(400).json("error");
  }
}

// Update the specified User.
async function update(req, res) {
  try {
    const { firstname, lastname, email, bio, image } = req.body;
    const newUserData = {
      firstname,
      lastname,
      email,
      bio,
      image,
    };
    const user = await User.findByIdAndUpdate(req.user.userID, newUserData);
    res.json(user);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected error has ocurred..." });
  }
}

async function imgProfile(req, res) {
  try {
    const { image } = req.body;

    console.log(image);

    // const user = await User.findByIdAndUpdate(req.user.userID, image);
    // res.json(user);
    res.json( { msg: "Ok" } );
  } catch (error) {
    return res.status(500).json({ msg: "Feature not implemented yet" });
  }
}

async function follow(req, res) {
  try {
    const user = await User.findById(req.user.userID);
    const userToFollow = await User.findById(req.params.id);
    console.log(userToFollow);

    if (req.user.userID === userToFollow.id) {
      console.log("NO TE PODES SEGUIR A VOS MISMO");
      res.status(400).json({ msg: "Cannot follow yourself" });
    } else if (user.following.includes(req.params.id)) {
      // Caso en que el "user" ya sigue a "userToFollow" -> Hay que sacarlo de la lista [following]
      console.log("Hay que sacarlo");
      await user.following.pull(req.params.id);
      await userToFollow.followers.pull(req.user.userID);
      await user.save();
      await userToFollow.save();
    } else {
      // Caso en que el "user" no sigue a "userToFollow" -> Hay que agregarlo a la lista [following]
      console.log("Hay que agregarlo");
      await user.following.push(req.params.id);
      await userToFollow.followers.push(req.user.userID);
      await user.save();
      await userToFollow.save();
    }
    res.json({ msg: "OK" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error al buscar en la DB" });
  }
}

module.exports = {
  getUser,
  getAllUsers,
  store,
  update,
  imgProfile,
  follow,
};

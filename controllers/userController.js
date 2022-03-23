const { User } = require("../models");

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

module.exports = {
  getAllUsers,
  store,
  update,
};

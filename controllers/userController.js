const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function getAll(req, res) {
  try {
    const users = await User.findAll();
    if (users) return res.json(users);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) return res.json(user);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

//store new user
async function store(req, res) {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    res.json({
      message: "User was registered successfully!",
      user,
      token: token,
    });
    return;
  } catch (error) {
    res.status(400);
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const user = await User.findByPk(req.user.userID);

    delete req.body.email;
    delete req.body.password;
    await user.update(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update({
      firstname: "Usuario",
      lasttname: "Eliminado",
      email: `user_${user.id}@email.com`,
      phone: "0123456789",
      address: "Usuario eliminado",
    });
    return res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  getAll,
  getOne,
  store,
  update,
  destroy,
};

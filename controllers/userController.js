const { User } = require("../models");
const jwt = require("jsonwebtoken");
// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function getOne(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

//store new user
async function store(req, res) {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      adress: req.body.adress,
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    res.json({ message: "User was registered successfully!", accessToken: token });
    return;
  } catch (error) {
    res.status(400);
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  getOne,
  create,
  store,
  edit,
  update,
  destroy,
};

const { User } = require("../models");

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
    req.login(user, (error) => {
      if (error) {
        res.status(500).send("Lo sentimos, error inesperado.");
      }
      res.redirect("/admin/articulos");
    });
  } catch (error) {
    res.status(400).render("error404");
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

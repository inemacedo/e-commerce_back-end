
const { Admin } = require("../models");


// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = await Admin.findAll();
    return res.json( admins );
  } catch (error) {
    return res.json({ msg: "error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json( admin );
  } catch (error) {
    return res.json();
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const created = await Admin.create( {...req.body} );
    return res.json( { msg: created ? "OK" : "no se pudo crear" } );
  } catch (error) {
    return res.json({ msg: "Error. Credenciales no validas." });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const deleted = await Admin.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json( { msg: deleted===1 ? "Deleted successfuly" : "ERROR" } );
  } catch (error) {
    return res.json();
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};

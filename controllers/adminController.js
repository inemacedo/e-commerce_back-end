
const { Admin } = require("../models");
// const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  try {

    const admins = await Admin.findAll();
    // console.log(admins);
    return res.json( admins );
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {

    const result = await Admin.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json( result );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  // Utilizar formidable para guardar las imagenes
  try {
    const created = await Admin.create( {...req.body} );
    return res.json( { status: 200, msg: "Ok" } );
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.id
      }
    });
    await admin.update({
      ...req.body
    });
    res.json({ status: 200, msg: "Ok" });

  } catch (error) {
    res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    if( req.user.adminID === req.params.id )
    return res.status(400).json({ status: 400, msg: "Unauthorized" });

    const deleted = await Admin.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json( { status: 200, msg: "Deleted successfuly" } );
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

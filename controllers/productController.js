
const { User, Product } = require("../models");


// Display a listing of the resource.
async function getAll(req, res) {  
  const products = await Product.findAll();
  if(products) return res.json(products);
  return res.json({msg: "Prueba1"});
}

// Display the specified resource.
async function getOne(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  getAll,
  getOne,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
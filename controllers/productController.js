
const { User, Product } = require("../models");


// Display a listing of the resource.
async function getAll(req, res) {  
  try {
    const products = (req.query.featured) ? await Product.findAll({
      where: {
        featured: true
      },
      limit: 3
    }) : await Product.findAll({
      limit: 10
    });

    if(products) return res.json(products);
  
  } catch (error) {
    return res.status(500).json({msg: "Server error"});
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });
    if(product) return res.json(product);
    
  } catch (error) {
    return res.status(500).json({msg: "Server error"});
  }
}

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

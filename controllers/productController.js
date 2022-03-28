const { Product } = require("../models");

// Display a listing of the resource.
async function getAll(req, res) {
  try {
    const products = req.query.featured
      ? await Product.findAll({
          where: {
            featured: true,
          },
          limit: 3,
        })
      : await Product.findAll({
          limit: 10,
        });

    if (products) return res.json(products);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (product) return res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const deletedProduct = await Product.destroy({ where: { id: req.params.id } });
    if (deletedProduct) return res.json(deletedProduct);
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

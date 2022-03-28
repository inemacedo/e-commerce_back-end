const { Category, Product } = require("../models");

// Display the specified resource.
async function show(req, res) {
  try {
    const productsCategory = await Product.findAll({
      where: {
        categoryId: req.params.id,
      },
    });
    if (productsCategory) return res.json(productsCategory);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports = {
  show,
};

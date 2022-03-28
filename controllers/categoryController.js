const { Category } = require("../models");

// Display the specified resource.
async function getOne(req, res) {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (category) return res.json(category);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
    });
    if (newCategory) return res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const deletedCategory = await Category.destroy({ where: { id: req.params.id } });
    if (deletedCategory) return res.json(deletedCategory);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports = {
  getOne,
  store,
  destroy,
};

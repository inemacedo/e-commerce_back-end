const { Category } = require("../models");

// Display a listing of the resource.
async function getAll(req, res) {
  try {
    const categories = await Category.findAll();
    if (categories) {
      categories.map((item) => (item.dataValues.imgBaseUrl = process.env.SUPABASE_BUCKET_URL));
      return res.json(categories)
    };
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (category) {
      category.map((item) => (item.dataValues.imgBaseUrl = process.env.SUPABASE_BUCKET_URL));
      return res.json(category)
    };
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

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const category = Category.findOne({
      where: {
        id: req.params.id
      }
    });
    delete req.body.id;
    category.update(req.body);
    return res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
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
  getAll,
  getOne,
  store,
  update,
  destroy,
};

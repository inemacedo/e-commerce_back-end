const { Product } = require("../models");
const { Category } = require("../models/");
const slugify = require("slugify");

// Display a listing of the resource.
async function getAll(req, res) {
  if (req.query.category) {
    const products = await getByCategory(req.query.category);
    if (products) return res.json(products);
  } else {
    try {
      const max = req.query.limit ? Number(req.query.limit) : 10;
      const products = req.query.featured
        ? await Product.findAll({
            where: {
              featured: true,
            },
            limit: 3,
          })
        : await Product.findAll({
            limit: max,
          });
      if (products) return res.json(products);
      console.log(products);
    } catch (error) {
      return res.status(500).json({ msg: "Server error" });
    }
  }
}

// Display a listing of the resource by category
async function getByCategory(categoryName, res) {
  try {
    const category = await Category.findOne({
      where: {
        name: categoryName,
      },
    });
    const productsByCategory = await Product.findAll({
      where: {
        categoryId: category.id,
      },
    });
    if (productsByCategory) return productsByCategory;
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const product = await Product.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    if (product) return res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    console.log(req.body);
    const product = await Product.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      imageenvironment: req.body.imageenvironment,
      price: req.body.price,
      stock: req.body.stock,
      featured: req.body.featured,
      measures: req.body.measures,
      style: req.body.style,
      material: req.body.material,
      environment: req.body.environment,
      imagemeasures: req.body.imagemeasures,
      slug: slugify(req.body.title),
      categoryId: req.body.categoryId,
    });
    if (product) return res.json({ msg: "Product added successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

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
  getByCategory,
  getOne,
  store,
  update,
  destroy,
};

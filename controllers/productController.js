const { Product } = require("../models");
const { Category } = require("../models/");
const slugify = require("slugify");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

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
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "../images",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.product.path);
    const newFileName = `image_${Date.now()}${ext}`;
    const newFileNameEnvironment = `imageenvironment_${Date.now()}${ext}`;
    const newFileNameMeasures = `imagemeasures_${Date.now()}${ext}`;
    const { data, error } = await supabase.storage;
    console
      .log(supabase)
      .from("products")
      .upload(
        newFileName,
        newFileNameEnvironment,
        newFileNameMeasures,
        fs.createReadStream(files.product.path),
        {
          cacheControl: "3600",
          upsert: false,
          contentType: files.product.type,
        },
      );
  });
  try {
    console.log(req.body);
    const product = await Product.create({
      title: req.body.title,
      description: req.body.description,
      image: newFileName,
      imageenvironment: newFileNameEnvironment,
      price: req.body.price,
      stock: req.body.stock,
      featured: req.body.featured,
      measures: req.body.measures,
      style: req.body.style,
      material: req.body.material,
      environment: req.body.environment,
      imagemeasures: newFileNameMeasures,
      slug: slugify(req.body.title),
      categoryId: req.body.categoryId,
    });
    if (product) return res.json({ msg: "Product added successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: "Server error can't create product" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const product = await Product.findByPk( req.params.id );
    delete req.body.id;
    product.update(req.body);
    return res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

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

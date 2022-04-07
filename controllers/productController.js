const { Product } = require("../models");
const { Category } = require("../models/");
const slugify = require("slugify");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

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
    return productsByCategory;
  } catch (error) {
    return [{ msg: "Server error" }];
  }
}

// Display a listing of the resource.
async function getAll(req, res) {
  // return res.json({ msg: "HOLA ANDY" });
  try {
    if (req.query.category) {
      const products = await getByCategory(req.query.category);
      return res.json(products);
    } else {
      const max = req.query.limit ? Number(req.query.limit) : 10;

      let products;
      if (req.query.featured) {
        products = await Product.findAll({
          where: {
            featured: true,
          },
          limit: 3,
        });
      } else {
        products = await Product.findAll({
          limit: max,
        });
      }
      products.map((product) => (product.dataValues.imgBaseUrl = process.env.SUPABASE_BUCKET_URL));
      return res.json(products);
    }
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
    product.dataValues.imgBaseUrl = process.env.SUPABASE_BUCKET_URL;
    if (product) return res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  const uploadImage = async (supabase, name, path, mimetype) => {
    const { data, error } = await supabase.storage
      .from("e-commerce")
      .upload(`products/${name}`, fs.createReadStream(path), {
        cacheControl: "3600",
        upsert: false,
        contentType: mimetype,
      });
  };
  form.parse(req, async (err, fields, files) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    //fields.image = files.image.newFilename;
    const imagesName = ["image", "imageenvironment", "imagemeasures"];

    for (const name of imagesName) {
      uploadImage(supabase, files[name].newFilename, files[name].filepath, files[name].mimetype);
    }
    try {
      const product = await Product.create({
        title: fields.title,
        description: fields.description,
        image: files.image.newFilename,
        imageenvironment: files.imageenvironment.newFilename,
        price: fields.price,
        stock: fields.stock,
        featured: fields.featured,
        measures: fields.measures,
        style: fields.style,
        material: fields.material,
        environment: fields.environment,
        imagemeasures: files.imagemeasures.newFilename,
        slug: slugify(fields.title),
        categoryId: fields.categoryId,
      });
      if (product) return res.json({ msg: "Product added successfully!" });
    } catch (error) {
      return res.status(500).json({ msg: "Server error can't create product" });
    }
  });
}
//comment
//Update the specified resource in storage.
async function update(req, res) {
  try {
    const product = Product.findOne({
      where: {
        id: req.params.id,
      },
    });
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

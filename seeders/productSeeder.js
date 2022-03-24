const { Product } = require("../models");
const products = require("./allProducts");

module.exports = async () => {
  // const articles = [];

  // for (let i = 0; i < products.length; i++) {
  //   articles.push(products[i]);
  // }

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};

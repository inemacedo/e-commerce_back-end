const express = require("express");
const checkJwt = require("express-jwt");
const productController = require("../controllers/productController");
const productRoutes = express.Router();

productRoutes.get("/products", productController.getAll);

productRoutes.get("/products/category", productController.getByCategory);

productRoutes.get("/products/:id", productController.getOne);

productRoutes.post("/products", productController.store);

productRoutes.patch(
  "/products/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.update,
);

productRoutes.delete(
  "/products/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.destroy,
);

module.exports = productRoutes;

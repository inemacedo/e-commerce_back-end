const express = require("express");
const checkJwt = require("express-jwt");
const productController = require("../controllers/productController");
const productRoutes = express.Router();
const isAdmin = require("../middlewares/isAdmin");

productRoutes.get("/products", productController.getAll);

productRoutes.get("/products/:slug", productController.getOne);

productRoutes.post(
  "/products",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  productController.store,
);

productRoutes.patch(
  "/products/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  productController.update,
);

productRoutes.delete(
  "/products/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  productController.destroy,
);

module.exports = productRoutes;

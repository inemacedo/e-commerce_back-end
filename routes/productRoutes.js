const express = require("express");
const productController = require("../controllers/productController");
const productRoutes = express.Router();

productRoutes.get("/products", productController.getAll);

productRoutes.get("/products/:id", productController.getOne);

productRoutes.post("/products", productController.store);

productRoutes.patch("/products/:id", productController.update);

productRoutes.delete("/products/:id", productController.destroy);

module.exports = productRoutes;

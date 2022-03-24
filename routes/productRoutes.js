const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();


productRouter.get("/products", productController.getAll);

productRouter.get("/products/:id", productController.getOne);

productRouter.post("/products", productController.store);

productRouter.patch("/products/:id", productController.update);

productRouter.delete("/products/:id", productController.destroy);


module.exports = productRouter;
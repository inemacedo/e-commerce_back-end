const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();


productRouter.get("/users/:id", productController.getOne);

productRouter.post("/users", productController.store);

productRouter.patch("/users/:id", productController.update);

productRouter.delete("/users/:id", productController.destroy);


module.exports = productRouter;
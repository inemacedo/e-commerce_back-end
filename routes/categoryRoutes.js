const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();

categoryRoutes.get("/category/:id", categoryController.show);

// categoryRoutes.get("/products/:id", categoryController.getOne);

// categoryRoutes.post("/products", categoryController.store);

// categoryRoutes.patch("/products/:id", categoryController.update);

// categoryRoutes.delete("/products/:id", categoryController.destroy);

module.exports = categoryRoutes;

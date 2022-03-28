const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();

categoryRoutes.get("/category/:id", categoryController.getOne);

categoryRoutes.post("/category", categoryController.store);

// categoryRoutes.patch("/products/:id", categoryController.update);

categoryRoutes.delete("/category/:id", categoryController.destroy);

module.exports = categoryRoutes;

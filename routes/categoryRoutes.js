const express = require("express");
const checkJwt = require("express-jwt");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();

categoryRoutes.get("/categories", categoryController.getAll);

categoryRoutes.get("/categories/:id", categoryController.getOne);

categoryRoutes.post(
  "/categories",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.store,
);

categoryRoutes.patch(
  "/categories/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.update,
);

categoryRoutes.delete(
  "/categories/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.destroy,
);

module.exports = categoryRoutes;

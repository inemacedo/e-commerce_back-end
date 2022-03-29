const express = require("express");
const checkJwt = require("express-jwt");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();

categoryRoutes.get("/category", categoryController.getAll);

categoryRoutes.get("/category/:id", categoryController.getOne);

categoryRoutes.post(
  "/category",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.store,
);

categoryRoutes.patch(
  "/category/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.update,
);

categoryRoutes.delete(
  "/category/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  categoryController.destroy,
);

module.exports = categoryRoutes;

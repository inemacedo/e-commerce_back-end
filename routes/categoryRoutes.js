const express = require("express");
const checkJwt = require("express-jwt");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();
const isAdmin = require("../middlewares/isAdmin");

categoryRoutes.get("/categories", categoryController.getAll);

categoryRoutes.get("/categories/:id", categoryController.getOne);

categoryRoutes.post(
  "/categories",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.store,
);

categoryRoutes.patch(
  "/categories/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.update,
);

categoryRoutes.delete(
  "/categories/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.destroy,
);

module.exports = categoryRoutes;

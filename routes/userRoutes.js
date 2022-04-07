const express = require("express");
const checkJwt = require("express-jwt");
const userController = require("../controllers/userController");
const userRoutes = express.Router();
const isAdmin = require("../middlewares/isAdmin");

userRoutes.get(
  "/users",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  userController.getAll,
);

userRoutes.get(
  "/users/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.getOne,
);

userRoutes.post("/users", userController.store);

userRoutes.patch(
  "/users/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.update,
);

userRoutes.delete(
  "/users/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.destroy,
);

module.exports = userRoutes;

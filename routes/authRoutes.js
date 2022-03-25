const express = require("express");
const authController = require("../controllers/authController");
const authRoutes = express.Router();

authRoutes.post("/tokens", authController.newToken);

module.exports = authRoutes;

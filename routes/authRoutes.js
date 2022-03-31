const express = require("express");
const authController = require("../controllers/authController");
const authRoutes = express.Router();

authRoutes.post("/tokens", authController.newToken);

authRoutes.post("/tokens/admins", authController.newAdminToken);

module.exports = authRoutes;

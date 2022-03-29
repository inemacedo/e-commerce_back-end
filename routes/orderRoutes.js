const express = require("express");
const checkJwt = require("express-jwt");
const orderController = require("../controllers/orderController");
const orderRoutes = express.Router();

orderRoutes.get("/orders", orderController.getAll);

orderRoutes.get("/orders/:id", orderController.getOne);

module.exports = orderRoutes;

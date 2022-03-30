const express = require("express");
const orderController = require("../controllers/orderController");
const orderRoutes = express.Router();
const checkJwt = require("express-jwt");

orderRoutes.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

orderRoutes.get("/orders", orderController.getAll);

orderRoutes.get("/orders/:id", orderController.getOne);

orderRoutes.post("/orders", orderController.store);

module.exports = orderRoutes;

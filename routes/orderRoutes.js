const express = require("express");
const orderController = require("../controllers/orderController");
const orderRoutes = express.Router();
const checkJwt = require("express-jwt");
const catchRole = require("../middlewares/catchRole");


orderRoutes.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

orderRoutes.get("/orders", catchRole, orderController.getAll);

orderRoutes.get("/orders/:id", orderController.getOne);

orderRoutes.post("/orders", orderController.store);

orderRoutes.delete("/orders/:id", orderController.destroy);

module.exports = orderRoutes;

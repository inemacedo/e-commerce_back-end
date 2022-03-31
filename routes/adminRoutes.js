const express = require("express");
const adminController = require("../controllers/adminController");
const adminRouter = express.Router();
const checkJwt = require("express-jwt");
const validateAdmin = require("../middlewares/validateAdmin");

adminRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

adminRouter.use(validateAdmin);

adminRouter.get("/admins", adminController.index);

adminRouter.get("/admins/:id", adminController.show);

adminRouter.post("/admins", adminController.store);

adminRouter.patch("/admins/:id", adminController.update);

adminRouter.delete("/admins/:id", adminController.destroy);

module.exports = adminRouter;

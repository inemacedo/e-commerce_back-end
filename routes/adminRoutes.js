const express = require("express");
const adminRouter = express.Router();

// adminRouter.use(
//   checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })
// );

// adminRouter.get("/admins", userController.getAll);

// adminRouter.get("/admins/:id", userController.getOne);

// adminRouter.post("/admins", userController.store);

// adminRouter.patch("/admins/:id", userController.update);

// adminRouter.delete("/admins/:id", userController.destroy);


module.exports = adminRouter;

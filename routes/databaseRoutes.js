const express = require("express");
const dbInitialSetup = require("../dbInitialSetup");
const databaseRoutes = express.Router();

databaseRoutes.post("/db/reset", async (req, res) => {
  try {
    req.body.reset && dbInitialSetup();
    res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = databaseRoutes;

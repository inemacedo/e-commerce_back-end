const express = require("express");
const dbInitialSetup = require("../dbInitialSetup");
const databaseRoutes = express.Router();

databaseRoutes.post("/db/reset", async (req, res) => {
  try {

    if(req.body.reset){
      const result = await dbInitialSetup();
      res.json({ status: 200, msg: result });
    }
    return res.status(500).json({ status: 500, msg: "Server error" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
});


module.exports = databaseRoutes;

const express = require("express");
const dbInitialSetup = require("../dbInitialSetup");
const dbRouter = express.Router();

dbRouter.post("/db/reset", async (req, res) => {
  try {
    if (req.body.reset === true) {
      await dbInitialSetup();
      return res.json({ msg: "Database reseteada" });
    }
    return res.json({ msg: "Ok" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
});

module.exports = dbRouter;

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.params.id === req.user) {
    next();
  } else {
    res.status(401).send({ msg: "Permission denied" });
  }
};

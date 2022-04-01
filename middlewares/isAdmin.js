
const { Admin } = require("../models");

async function isAdmin(req, res, next){
  const admin = await Admin.findOne({
    where: {
      email: req.user.sub
    }
  });
  if( admin ) next();
  else return res.status(401).json({ status: 401, msg: "Unauthorized" });
}

module.exports = isAdmin;
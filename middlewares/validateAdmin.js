
const { Admin } = require("../models");

async function validateAdmin(req, res, next){
  const admin = await Admin.findOne({
    where: {
      email: req.user.sub
    }
  });
  if( !admin || admin.token !== req.headers.authorization ){
    return res.status(401).json({ status: 401, msg: "Unauthorized" });
  }else{
    next();
  }
}

module.exports = validateAdmin;
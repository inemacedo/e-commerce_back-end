

// Deja disponible en el req.user.role el rol.
// Dependiendo de si es Admin o User

const { Admin, User } = require("../models");

async function catchRole(req, res, next){
  const user = await User.findOne({
    where: {
      email: req.user.sub
    }
  });

  if( user ){
    req.user.role = "user";
    return next();
  }
  const admin = await Admin.findOne({
    where: {
      email: req.user.sub
    }
  });
  if( admin ){
    req.user.role = "admin";
    return next();
  }
  return res.status(401).json({ status: 401, msg: "Unauthorized" });
}

module.exports = catchRole;


// Deja disponible en el req.user.role el rol.
// Dependiendo de si es Admin o User

const { Admin, User } = require("../models");

async function catchRole(req, res, next) {

  try {
    console.log(req.user);
    const user = await User.findByPk(req.user.userID);
    if (user) {
      req.user.role = "user";
      return next();
    }
    const admin = await Admin.findByPk(req.user.adminID);
    if (admin) {
      req.user.role = "admin";
      return next();
    }

  } catch (error) {
    console.log(error);
    return res.status(401).json({ status: 401, msg: "Unauthorized" });
  }

}

module.exports = catchRole;
const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");

// Guardar token del admin en la DB y checkearlo para cada admin route
async function newToken(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    const correctPassword = await user.checkUser(req.body.password);

    if (correctPassword) {
      const newPayload = {
        sub: user.email,
        userID: user.id,
      };
      const newJwt = jwt.sign(newPayload, process.env.JWT_SECRET);

      return res.json({ id: user.id, email: user.email, token: newJwt });
    }
    res.status(400).json({ status: 400, msg: "Wrong credentials." });

  } catch (error) {
    if(error.name==="TypeError" && error.message==="Cannot read properties of null (reading 'checkUser')"){
      return res.status(400).json({ status: 400, msg: "Wrong credentials." });
    }
    res.status(500).json({ status: 500, msg: "Server error." });
  }
}

async function newAdminToken(req, res) {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });
    const correctPassword = await admin.checkAdminPassword(req.body.password);

    if (correctPassword) {
      const newPayload = {
        sub: admin.email,
        adminID: admin.id,
      };
      const newJwt = jwt.sign(newPayload, process.env.JWT_SECRET);

      // admin.set({
      //   token: `Bearer ${newJwt}`
      // });
      // await admin.save();

      return res.json({ id: admin.id, email: admin.email, token: newJwt });
    }
    res.status(400).json({ status: 400, msg: "Wrong credentials." });

  } catch (error) {
    if(error.name==="TypeError" && error.message==="Cannot read properties of null (reading 'checkAdminPassword')"){
      return res.status(400).json({ status: 400, msg: "Wrong credentials." });
    }
    res.status(500).json({ status: 500, msg: "Server error." });
  }
}

module.exports = {
  newToken,
  newAdminToken,
};

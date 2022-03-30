const { User } = require("../models");
const jwt = require("jsonwebtoken");

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

module.exports = {
  newToken,
};

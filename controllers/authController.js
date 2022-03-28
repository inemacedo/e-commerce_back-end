const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function newToken(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    const correctPassword = user.checkUser(req.body.password);

    if (correctPassword) {
      const newPayload = {
        sub: user.email,
        userID: user.id,
      };
      const newJwt = jwt.sign(newPayload, process.env.JWT_SECRET);

      res.json({ id: user.id, email: user.email, token: newJwt });
    }
  } catch (error) {
    res.status(401).json({ msg: "Wrong credentials." });
  }
}

module.exports = {
  newToken,
};

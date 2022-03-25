const { User, Tweet } = require("../models");
const jwt = require("jsonwebtoken");

async function newToken(req, res) {
  try {
    const user = await User.findByPk({ username: req.body.username });
    const correctPassword = user.comparePassword(req.body.password);

    if (correctPassword) {
      const newPayload = {
        sub: user.username,
        userID: user.id,
      };
      const newJwt = jwt.sign(newPayload, process.env.JWT_SECRET);

      res.json({ id: user.id, username: user.username, token: newJwt });
    }
  } catch (error) {
    res.status(401).json({ msg: "Wrong credentials." });
  }
}

module.exports = {
  newToken,
};

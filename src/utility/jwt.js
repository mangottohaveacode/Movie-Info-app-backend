const jwt = require("jsonwebtoken");
const { config } = require("../config");

const generateJwt = (user) =>
  jwt.sign(user, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });

module.exports = { generateJwt };

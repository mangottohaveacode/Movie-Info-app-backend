const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { config } = require("../config");

const generateJwt = (user) =>
  jwt.sign(user, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });

const generateRefreshToken = (user) => {
  const expiredAt = new Date();

  expiredAt.setSeconds(
    expiredAt.getSeconds() + config.config.jwt.refreshExpiresIn
  );

  const token = uuidv4();

  const refreshToken = {
    token,
    userId: user.id,
    expiryDate: expiredAt.getTime()
  };

  return refreshToken;
};


module.exports = { generateJwt, generateRefreshToken };

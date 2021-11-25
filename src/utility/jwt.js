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
    expiredAt.getSeconds() + config.jwt.refreshExpiresIn * 1000
  );

  const token = uuidv4();

  const refreshToken = {
    token,
    userId: user.id,
    expiryDate: expiredAt.getTime()
  };

  return refreshToken;
};

const verifyToken = (token, callback) => {
  jwt.verify(token, config.jwt.secret, callback);
};

const extractUserId = (token) => {
  const decodedToken = jwt.verify(token, config.jwt.secret, (err, decoded) => {
    if (err) {
      return { error: err };
    }

    return decoded;
  });

  return decodedToken.id;
};

module.exports = {
  generateJwt,
  generateRefreshToken,
  extractUserId,
  verifyToken
};

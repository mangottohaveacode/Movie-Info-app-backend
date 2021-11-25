const db = require("../database/models");

const getToken = async (token) => {
  const storedToken = await db.RefreshToken.findOne({
    where: { token }
  });
  return storedToken;
};

const create = async (entity) => {
  const token = await db.RefreshToken.create(entity);
  return token;
};

module.exports = { refreshTokenRepository: { getToken, create } };

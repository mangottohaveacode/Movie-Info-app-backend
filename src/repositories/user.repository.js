const db = require("../database/models");

const create = async (entity) => {
  const user = await db.User.create(entity);
  return user;
};

module.exports = { userRepository: { create } };

const db = require("../database/models");

const getByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email } });
  return user;
};

const create = async (entity) => {
  const user = await db.User.create(entity);
  return user;
};

module.exports = { userRepository: { create, getByEmail } };

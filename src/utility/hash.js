const bcrypt = require("bcrypt");

const generateSalt = async () => {
  const salt = await bcrypt.genSalt(10);
  return salt;
};

const generateHash = async (password, salt) => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

module.exports = { generateHash, generateSalt };

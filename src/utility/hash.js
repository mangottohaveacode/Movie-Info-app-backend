const bcrypt = require("bcrypt");

const generateHashAndSalt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return {
    salt,
    hash
  };
};

module.exports = { generateHashAndSalt };

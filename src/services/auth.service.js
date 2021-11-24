const { generateSalt, generateHash } = require("../utility/hash");
const { userRepository } = require("../repositories/user.repository");

const register = async (user) => {
  const salt = await generateSalt();
  const hash = await generateHash(user.password, salt);

  const newUser = await userRepository.create({
    username: user.username,
    email: user.email,
    passwordHash: hash,
    passwordSalt: salt
  });

  return {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email
  };
};

module.exports = { authService: { register } };

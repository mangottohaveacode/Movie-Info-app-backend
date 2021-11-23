const { generateHashAndSalt } = require("../utility/hash");
const { userRepository } = require("../repositories/user.repository");

const register = async (user) => {
  const hashAndSalt = await generateHashAndSalt(user.password);
  const newUser = await userRepository.create({
    username: user.username,
    email: user.email,
    passwordHash: hashAndSalt.hash,
    passwordSalt: hashAndSalt.salt
  });

  return {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email
  };
};

module.exports = { authService: { register } };

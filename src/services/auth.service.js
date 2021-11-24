const bcrypt = require("bcrypt");
const { generateSalt, generateHash } = require("../utility/hash");
const { generateJwt } = require("../utility/jwt");
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

const login = async (request) => {
  const user = await userRepository.getByEmail(request.email);

  if (user !== undefined && user !== null) {
    const correctPassword = await bcrypt.compare(
      request.password,
      user.passwordHash
    );

    if (correctPassword) {
      const jwt = generateJwt({
        id: user.id,
        username: user.username,
        email: user.email
      });

      return {
        token: jwt
      };
    }
  }

  return null;
};

module.exports = { authService: { register, login } };

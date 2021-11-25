const bcrypt = require("bcrypt");
const { generateSalt, generateHash } = require("../utility/hash");
const {
  generateJwt,
  generateRefreshToken,
  extractUserId,
  verifyToken
} = require("../utility/jwt");
const { userRepository } = require("../repositories/user.repository");
const {
  refreshTokenRepository
} = require("../repositories/refreshToken.repository");

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

const generateTokens = async (user) => {
  const refreshToken = generateRefreshToken(user);

  await refreshTokenRepository.create(refreshToken);

  const jwt = generateJwt({
    id: user.id,
    username: user.username,
    email: user.email
  });

  return {
    token: jwt,
    refreshToken: refreshToken.token
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
      const authResponse = await generateTokens(user);
      return authResponse;
    }
  }

  return null;
};

const refreshToken = async (request) => {
  const isVerified = verifyToken(request.token, (err) => err !== null && err !== undefined);

  if (!isVerified) {
    return null;
  }

  const token = await refreshTokenRepository.getToken(request.refreshToken);

  if (token !== undefined && token !== null) {
    if (token.expiryDate < new Date()) {
      return { error: "The refresh token has expired" };
    }

    const userId = extractUserId(request.token);

    if (token.userId !== userId) {
      return { error: "You cannot use thie refresh token" };
    }

    const user = await userRepository.getById(userId);

    const authResponse = await generateTokens(user);
    return authResponse;
  }

  return null;
};

module.exports = { authService: { register, login, refreshToken } };

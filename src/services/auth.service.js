require('dotenv/config');
const jwtService = require('./jwt.service');
const passwordService = require('./password.service');

const { User } = require('../database/models');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const e = new Error('Invalid fields');
    e.name = 'UnauthorizedError';
    throw e;
  }
  passwordService.checkPassword(password, user.password_hash);
  const { passwordHash: _, ...userWithoutPassword } = user;

  const token = jwtService.createToken(userWithoutPassword.dataValues);

  return token;
};

const verifyToken = (token) => {
  if (!token) {
    const e = new Error('Token é obrigatório');
    e.name = 'Unauthorized error';
    throw e;
  }
};

module.exports = {
  validateCredentials,
  verifyToken,
};

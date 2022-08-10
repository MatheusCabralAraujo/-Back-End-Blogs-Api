require('dotenv/config');
const jwtService = require('./jwt.service');

const { User } = require('../database/models');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    const e = new Error('Invalid fields');
    e.name = 'ValidationError';
    throw e;
  }
  
  const token = jwtService.createToken(user.dataValues);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token é obrigatório');
    e.name = 'Unauthorized error';
    throw e;
  }
};

module.exports = {
  validateCredentials,
  validateToken,
};

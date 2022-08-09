const { User } = require('../database/models/index');
const { verifyEmail, verifyPassword } = require('../middlewares/validations');
const passwordHash = require('./password.service');

const getAll = async () => {
  const result = await User.findAll();
  return result;
};

const login = async (email, password) => {
  const validateEmail = verifyEmail(email);
  const validatePassword = verifyPassword(password);
  const passwordEncryp = passwordHash.encryptPassword(password);
  if (validateEmail && validatePassword) {
    const result = await User.create({ email, passwordEncryp });
  return result;
  } 
    return console.log('error');
};

module.exports = {
  getAll,
  login,
};
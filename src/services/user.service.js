const { User } = require('../database/models/index');
const { verifyEmail, verifyPassword } = require('../middlewares/validations');
const { createToken } = require('./jwt.service');

const getAll = async () => {
  const result = await User.findAll();
  console.log(result);
  return result;
};

const createUser = async (data) => {
  const validateEmail = verifyEmail(data.email);
  const validatePassword = verifyPassword(data.password);
  
  if (validateEmail) {
    const e = new Error(validateEmail.message);
    e.code = validateEmail.status;
    throw e;
  } 
  if (validatePassword) {
    const e = new Error(validatePassword.message);
    e.code = validatePassword.status;
    throw e;
  }
  const newUser = await User.create(data);
  const newToken = createToken(newUser);
  return newToken;
};

module.exports = {
  getAll,
  createUser,
};
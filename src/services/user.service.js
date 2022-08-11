const { User } = require('../database/models/index');
const { verifyEmail, verifyPassword } = require('../middlewares/validations');

const getAll = async () => {
  const result = await User.findAll();
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
  const newUser = await User.create({ data });
  return newUser;
};

module.exports = {
  getAll,
  createUser,
};
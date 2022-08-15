const { User } = require('../database/models/index');
const { verifyExistingUser, 
  verifyName, verifyEmail, verifyPassword } = require('../middlewares/validations');
const { createToken } = require('./jwt.service');

const getAll = async () => {
  const result = await User.findAll({ attributes: {
    exclude: ['password'],
  } });
  return result;
};

const getById = async (id) => {
  const user = await User.findOne(
    { where: { id },
    attributes: {
      exclude: ['password'],
  } },
);
  return user;
};

const createUser = async (data) => {
  verifyName(data.displayName);
  verifyEmail(data.email);
  verifyPassword(data.password);
  await verifyExistingUser(data.email);
  
  const newUser = await User.create(data);
  const newToken = createToken(newUser);
  return newToken;
};

module.exports = {
  getAll,
  getById,
  createUser,
};
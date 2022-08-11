const userService = require('../services/user.service.js');

const getAll = async (req, res) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  createUser,
};
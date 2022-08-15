const categoryService = require('../services/category.service');

const getAll = async (req, res) => {
  const result = await categoryService.getAll();
  return res.status(200).json(result);
};

const createCategory = async (req, res) => {
  const result = await categoryService.createUser(req.body);
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  createCategory,
};
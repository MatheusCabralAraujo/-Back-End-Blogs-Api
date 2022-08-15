const categoryService = require('../services/category.service');

const getAll = async (req, res) => {
  const result = await categoryService.getAll();
  return res.status(200).json(result);
};

const createCategory = async (req, res) => {
  const name = req.body;
  const result = await categoryService.createCategory(name);
  return res.status(201).json(result);
};

module.exports = {
  getAll,
  createCategory,
};
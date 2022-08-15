const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const result = await categoryService.createUser(req.body);
  return res.status(200).json(result);
};

module.exports = {
  createCategory,
};
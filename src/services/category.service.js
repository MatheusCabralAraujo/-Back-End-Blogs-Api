const { Category } = require('../database/models/index');
const { verifyCategoryName } = require('../middlewares/validationsCategory');

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

const createCategory = async ({ name }) => {
  verifyCategoryName({ name });
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  getAll,
  createCategory,
};

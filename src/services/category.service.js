const { Category } = require('../database/models/index');
const { verifyCategoryName } = require('../middlewares/validationsCategory');

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

const createCategory = async (data) => {
  const validName = verifyCategoryName(data.name);
  if (validName) {
    const e = new Error(validName.message);
    e.code = validName.status;
    throw e;
  }
  const newCategory = await Category.create(data);
  return newCategory;
};

module.exports = {
  getAll,
  createCategory,
};

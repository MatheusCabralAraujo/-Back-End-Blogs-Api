
const Category = (sequelize, DataTypes ) => {
  const Category = sequelize.define("Category", {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
  );
  return Category
}

module.exports = Category;
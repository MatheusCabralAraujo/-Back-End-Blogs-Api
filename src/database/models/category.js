
const Category = (sequelize, DataTypes ) => {
  const Category = sequelize.define("Category", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
  );
  return Category
}

module.exports = Category;
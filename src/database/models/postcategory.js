

const createPostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.BlogPost, { 
      through: PostCategory,
      otherKey: 'categoryId',
      foreignKey: 'postId',
      as: 'blogPost'
    })}

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.Category, { 
      through: PostCategory,
      otherKey: 'postId',
      foreignKey: 'categoryId',
      as: 'category' 
    })}

  return PostCategory;
};

module.exports = createPostCategory; 
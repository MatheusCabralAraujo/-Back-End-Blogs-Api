const createPostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", 
    {},
    { timestamps: false },
  );
  PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategory;
};

module.exports = createPostCategory;
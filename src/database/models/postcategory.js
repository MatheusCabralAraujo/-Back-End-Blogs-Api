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
    models.Category.belongsToMany(models.BlogPost, { 
      through: PostCategory,
      otherKey: 'postId',
      foreignKey:'categoryId',
      as: 'blogPost'
    })
   models.BlogPost.belongsToMany(models.Category, { 
      through: PostCategory,
      otherKey: 'categoryId',
      foreignKey: 'postId',
      as: 'category' 
    })
  }

  return PostCategory;
};

module.exports = createPostCategory; 
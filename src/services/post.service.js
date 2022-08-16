const { Category, User, BlogPost, PostCategory } = require('../database/models');
const { validatePost, verifyBeforeDestroy } = require('../middlewares/post.validations');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

const createPost = async (req, userId) => {
  const { title, content, categoryIds } = req.body;
  validatePost(title, content, categoryIds);
  const category = await Category.findOne({
    where: { id: categoryIds },
  });
  if (!category) return false;
  const { dataValues } = await BlogPost.create({ title, content, userId });
  await Promise.all(categoryIds.map((item) => PostCategory))
  categoryIds.forEach(async (categoryId) => {
  await PostCategory.create([{ postId: post.dataValues.id, categoryId }]); 
});
  
  return post;
};

const updatePost = async (id, title, content) => {
  const result = await getPostById(id);
  const resultUpdated = result.update({ title, content });
  return resultUpdated;
};

const deleteBlogPostsById = async (id, userId) => {
  const post = await getPostById(id);
  verifyBeforeDestroy(userId, post.userId);
  return post.destroy({ where: { id: [id] } });  
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deleteBlogPostsById };

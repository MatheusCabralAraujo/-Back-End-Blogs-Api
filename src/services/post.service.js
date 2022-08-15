const { Category, User, BlogPost, PostCategory } = require('../database/models');
const { validatePost } = require('../middlewares/post.validations');

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

const createPost = async ({ title, content, categoryIds, userId }) => {
  validatePost(title, content, categoryIds, userId);
  const category = await Category.findOne({
    where: { id: categoryIds },
  });
  if (!category) return false;
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
  });
  categoryIds.map(async (categoryId) => {} );
  await PostCategory.bulkCreate([{ postId: post.id, categoryId }])
  return post;
};

const deleteBlogPostsById = async (id) => {
  const post = await getPostById(id);
  return post.destroy({ where: { id: [id] } });  
};

module.exports = { getAllPosts, getPostById, createPost, deleteBlogPostsById };

const { Category, User, BlogPost, PostCategory } = require('../database/models');

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

const createPost = async ({ title, content, categoryIds, userId }) => {
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

  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({
      postId: post.id,
      categoryId,
    });
  });

  return post;
};

module.exports = { getAllPosts, createPost };

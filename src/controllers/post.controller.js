const jwt = require('jsonwebtoken');
const postServices = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postServices.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postServices.getPostById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    res.status(200).json(post);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.decode(token);
  console.log(user);
  const post = await postServices.createPost(req, user.data.id);
  
  if (!post) return res.status(400).json({ message: '"categoryIds" not found' });
  
  return res.status(201).json(post);
  };

const updatePost = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { title, content } = req.body;
  const result = await postServices.updatePost(Number(id), title, content);
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (userId !== result.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return res.status(200).json(result);
};

const deleteBlogPostsById = async (req, res) => {
  const userId = req.user.id;
  try {
    const { id } = req.params;
    const result = await postServices.deleteBlogPostsById(Number(id), userId);
    if (result) {
      return res.status(204).end();
    }
  } catch (_err) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
};
  
  module.exports = { getAllPosts, getPostById, createPost, updatePost, deleteBlogPostsById };
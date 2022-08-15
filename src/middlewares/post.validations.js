const validatePost = (title, content, categoryIds) => {
  if (!title) {
    const e = new Error('"name" is required');
    e.name = 'ValidationError';
    throw e;
  }
  if (!content) {
    const e = new Error('Some required fields are missing');
    e.name = 'ValidationError';
    throw e;
  }
  if (!categoryIds) {
    const e = new Error('"categoryIds" not found');
    e.name = 'ValidationError';
    throw e;
  }
};

module.exports = {
  validatePost,
};
const verifyCategoryName = ({ name }) => {
  if (!name) {
    const e = new Error('"name" is required');
    e.name = 'ValidationError';
    throw e;
  }
  };

module.exports = {
  verifyCategoryName,
};
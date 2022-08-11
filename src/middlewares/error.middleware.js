const errors = {
  ValidationError: 400,
  NotFoundError: 404,
  Conflict: 409,
};

const errorHandlerMiddleware = (error, _req, res, _next) => {
  const { name } = error;
  const status = errors[name];
  if (!status) return res.status(500).send('Internal Server Error');
  return res.status(status).json({ message: error.message });
};

module.exports = errorHandlerMiddleware;
const authService = require('../services/auth.service');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try { 
    const token = await authService.validateCredentials({ email, password });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  const user = authService.validateToken(authorization);
  req.user = user;
  next();
};

module.exports = {
  login, 
  validateToken,
};
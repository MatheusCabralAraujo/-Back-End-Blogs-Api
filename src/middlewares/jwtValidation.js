require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return _res.status(401).json({ message: 'Token not found' });
  try {
    const { data } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (_error) {
    return _res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};
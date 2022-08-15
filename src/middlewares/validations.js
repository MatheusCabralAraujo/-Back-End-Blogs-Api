require('dotenv/config');
const { User } = require('../database/models/index');

const verifyName = (displayName) => {
    if (displayName.length < 8) {
      const e = new Error('"displayName" length must be at least 8 characters long');
      e.name = 'ValidationError';
      throw e;
    }
  };
  
const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const verification = emailRegex.test(email);
  if (!email) {
    const e = new Error('"email" is required');
    e.name = 'ValidationError';
    throw e;
  }
  if (!verification) {
    const e = new Error('"email" must be a valid email'); 
    e.name = 'ValidationError';
    throw e;
  }
};

const verifyPassword = (password) => {
  if (password.length < 6) {
    const e = new Error('"password" length must be at least 6 characters long');
    e.name = 'ValidationError';
    throw e;
}
};

const verifyExistingUser = async (email) => {
  const locateUser = await User.findOne({ where: { email } });
  if (locateUser) {
    const e = new Error('User already registered');
    e.name = 'Conflict';
    throw e;
  }
};

const verifyLoginReq = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
   next({ name: 'ValidationError', message: 'Some required fields are missing' });
   return;
  }
  next();
};

  module.exports = {
    verifyName,
    verifyEmail,
    verifyPassword,
    verifyLoginReq,
    verifyExistingUser,
  };
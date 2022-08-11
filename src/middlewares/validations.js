const { User } = require('../database/models/index');

const verifyName = (displayName) => {
    if (displayName.length < 8) {
      return { status: 400, message: '"displayName" length must be at least 8 characters long' };
    }
  };
  
const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const verification = emailRegex.test(email);
  if (!email) {
    return { status: 400, message: '"email" is required' };
  }
  if (!verification) {
    return { status: 400, message: '"email" must be a valid email' };
  }
};

const verifyPassword = (password) => {
  if (password.length < 5) {
    return { status: 400, message: '"password" length must be at least 6 characters long' };
}
};

const verifyExistingUser = async (req, res, next) => {
  const { email } = req.body;
  const locateUser = await User.findOne({ where: { email } });
  if (locateUser) {
    next({ name: 'Conflict', message: 'User already registered' });
    return;
  }
  next();
};

const verifyLoginReq = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
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
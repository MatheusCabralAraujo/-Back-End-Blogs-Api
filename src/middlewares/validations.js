const verifyName = (displayName) => {
    if (displayName) return { status: 400, message: '"name" is required' };
  
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

const verifyLoginReq = (email, password) => {
  if (!email || !password) {
    return { status: 400, message: 'Some required fields are missing' };
  }
};

  module.exports = {
    verifyName,
    verifyEmail,
    verifyPassword,
    verifyLoginReq,
  };
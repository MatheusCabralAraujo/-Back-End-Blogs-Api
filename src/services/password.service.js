const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const checkPassword = (password, passwordDb) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) {
    const e = new Error('Usuário ou senha inválida');
    e.name = 'Unauthorized Error';
    throw e;
  }
};

module.exports = {
  encryptPassword, checkPassword,
};
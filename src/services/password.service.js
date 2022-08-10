/* const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const checkPassword = (password, passwordDb) => {
  console.log('VERIFICA BANCO:', passwordDb);
  const isMatch = bcrypt.compareSync(password, passwordDb);
  console.log('VERIFICA ISMATCH', isMatch);
  if (!isMatch) {
    const e = new Error('Usuário ou senha inválida');
    e.name = 'Unauthorized Error';
    throw e;
  }
};

module.exports = {
  encryptPassword, checkPassword,
};
*/
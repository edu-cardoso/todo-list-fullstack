const bcrypt = require('bcryptjs');
const { User } = require('../models');

const createUser = ({ email, password }) => {
  const salt = bcrypt.genSaltSync(5);
  const hashPassword = bcrypt.hashSync(password, salt);
  return User.create({ email, password: hashPassword });
};


module.exports = {
  createUser,
}
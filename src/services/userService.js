const bcrypt = require('bcryptjs');
const { User } = require('../models');


const getByUserEmail = (email) => User.findOne({ where: { email } });

const createUser = async ({ email, password }) => {
  const user = await getByUserEmail(email);
  
  if(user) {
    return true
  }

  const salt = bcrypt.genSaltSync(5);
  const hashPassword = bcrypt.hashSync(password, salt);
  return await User.create({ email, password: hashPassword });
};



module.exports = {
  createUser,
  getByUserEmail,
}
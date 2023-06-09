const bcrypt = require('bcryptjs');
const { createToken } = require('../utils/authFunctions');
const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getByUserEmail(email);

  if(!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'usuário inexistente ou senha inválida' });
  }

  const token = createToken({
    userId: user.id, 
    email: user.email
  });

  return res.status(200).json({
    userId: user.id, 
    email: user.email,
    token
  });
}

module.exports = {
  login,
}
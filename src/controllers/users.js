const userService  = require('../services/userService');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  await userService.createUser({email, password});

  return res.status(201).json({
    message: 'Usuário criado com sucesso', 
    user: email
  });
}

module.exports = {
  createUser,
}
const userService  = require('../services/userService');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await userService.createUser({ email, password });

  if(user === true) {
    return res.status(400).json({
      message: 'Esse email já possui cadastro', 
    });
  }

  return res.status(201).json({
    message: 'Usuário criado com sucesso', 
    user: email
  });
}


module.exports = {
  createUser,
}
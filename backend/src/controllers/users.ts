import { Request, Response } from 'express';
import userService from '../services/userService'

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
 
  const user = await userService.createUser(email, password);

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


export {
  createUser,
}
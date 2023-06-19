import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createToken } from '../utils/authFunctions';
import userService from '../services/userService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  const user = await userService.getByUserEmail(email);

  if(!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return res.status(401).json({ message: 'usuário inexistente ou senha inválida' });
  }

  const token = createToken({
    userId: user.dataValues.id, 
    email: user.dataValues.email
  });

  return res.status(200).json({
    userId: user.dataValues.id, 
    email: user.dataValues.email,
    token
  });
}

export {
  login,
}
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/authFunctions';

const validateJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;
    if (!token)
      return res.status(401).json({ message: 'Token não encontrado' });

    verifyToken(token);
    
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno' });
  }
};

export {
  validateJwt
};
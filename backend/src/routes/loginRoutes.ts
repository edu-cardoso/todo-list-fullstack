import express from "express";
import { login } from '../controllers/login';
import { validateUser } from '../middlewares/userValidate';

const loginRoutes = express.Router();

loginRoutes.post('/', validateUser, login);

export {
  loginRoutes
};
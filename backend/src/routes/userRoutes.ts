import express from "express";
import { createUser } from '../controllers/users';
import { validateUser } from '../middlewares/userValidate';

const userRoutes = express.Router();

userRoutes.post('/', validateUser, createUser);

export {
  userRoutes
};


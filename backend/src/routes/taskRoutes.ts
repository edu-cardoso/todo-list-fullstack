import express from "express";
import { createTask, getAllTasks,
  deleteTask,
  updateTask } from '../controllers/tasks';
import { validateJwt } from '../middlewares/jwtValidate';
import { validateTaskId, 
  validateTaskAndUserId, validateTaskName } from '../middlewares/taskValidate';

const taskRoutes = express.Router();

taskRoutes.get('/:id', validateTaskId, getAllTasks);
taskRoutes.post('/', validateJwt, createTask);
taskRoutes.put('/:userId/:taskId', validateJwt,
  validateTaskAndUserId, validateTaskName, updateTask);
taskRoutes.delete('/:userId/:taskId', validateJwt,
  validateTaskAndUserId, deleteTask);

export {
  taskRoutes
};
const express = require('express');
const taskRoutes = express.Router();

const { createTask, getAllTasks, 
  deleteTask, updateTask } = require('../controllers/tasks');
const validateJwt = require('../middlewares/jwtValidate');
const { validateTaskId, 
  validateTaskAndUserId, validateTaskName } = require('../middlewares/taskValidate');

taskRoutes.get('/:id', validateTaskId, getAllTasks);
taskRoutes.post('/', validateJwt, createTask);
taskRoutes.put('/:userId/:taskId', 
  validateTaskAndUserId, validateTaskName, updateTask);
taskRoutes.delete('/:userId/:taskId', validateTaskAndUserId, deleteTask);

module.exports = taskRoutes;
const express = require('express');
const taskRoutes = express.Router();

const { createTask, getAllTasks, deleteTask }  = require('../controllers/tasks');
const validateJwt = require('../middlewares/jwtValidate');
const { validateTaskId, validateTaskDeletion } = require('../middlewares/taskValidate');

taskRoutes.get('/:id', validateTaskId, getAllTasks);
taskRoutes.post('/', validateJwt, createTask);
taskRoutes.delete('/:userId/:taskId', validateTaskDeletion, deleteTask);

module.exports = taskRoutes;
const express = require('express');
const taskRoutes = express.Router();

const { createTask, getAllTasks }  = require('../controllers/tasks');
const validateJwt = require('../middlewares/jwtValidate');
const validateTaskId = require('../middlewares/taskValidate');

taskRoutes.get('/:id', validateTaskId, getAllTasks);
taskRoutes.post('/', validateJwt, createTask);

module.exports = taskRoutes;
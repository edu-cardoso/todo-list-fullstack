"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
var express_1 = __importDefault(require("express"));
var tasks_1 = require("../controllers/tasks");
var jwtValidate_1 = require("../middlewares/jwtValidate");
var taskValidate_1 = require("../middlewares/taskValidate");
var taskRoutes = express_1.default.Router();
exports.taskRoutes = taskRoutes;
taskRoutes.get('/:id', taskValidate_1.validateTaskId, tasks_1.getAllTasks);
taskRoutes.post('/', jwtValidate_1.validateJwt, tasks_1.createTask);
taskRoutes.put('/:userId/:taskId', jwtValidate_1.validateJwt, taskValidate_1.validateTaskAndUserId, taskValidate_1.validateTaskName, tasks_1.updateTask);
taskRoutes.delete('/:userId/:taskId', jwtValidate_1.validateJwt, taskValidate_1.validateTaskAndUserId, tasks_1.deleteTask);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var userRoutes_1 = require("./routes/userRoutes");
var loginRoutes_1 = require("./routes/loginRoutes");
var taskRoutes_1 = require("./routes/taskRoutes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/users', userRoutes_1.userRoutes);
app.use('/login', loginRoutes_1.loginRoutes);
app.use('/tasks', taskRoutes_1.taskRoutes);
exports.default = app;

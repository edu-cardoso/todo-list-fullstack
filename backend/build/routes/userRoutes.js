"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = __importDefault(require("express"));
var users_1 = require("../controllers/users");
var userValidate_1 = require("../middlewares/userValidate");
var userRoutes = express_1.default.Router();
exports.userRoutes = userRoutes;
userRoutes.post('/', userValidate_1.validateUser, users_1.createUser);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
var express_1 = __importDefault(require("express"));
var login_1 = require("../controllers/login");
var userValidate_1 = require("../middlewares/userValidate");
var loginRoutes = express_1.default.Router();
exports.loginRoutes = loginRoutes;
loginRoutes.post('/', userValidate_1.validateUser, login_1.login);

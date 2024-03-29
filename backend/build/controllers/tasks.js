"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.getAllTasks = exports.createTask = void 0;
var taskService_1 = __importDefault(require("../services/taskService"));
var createTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, taskName, userId, task, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, taskName = _a.taskName, userId = _a.userId;
                return [4 /*yield*/, taskService_1.default.createTask(taskName, userId)];
            case 1:
                task = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: 'Tarefa criada com sucesso',
                        task: task,
                    })];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).json({ message: 'Erro interno' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createTask = createTask;
var getAllTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, taskService_1.default.getAllTasks(Number(id))];
            case 1:
                tasks = _a.sent();
                if (tasks.length === 0) {
                    return [2 /*return*/, res.status(401).json({
                            message: 'Nenhuma tarefa encontrada'
                        })];
                }
                return [2 /*return*/, res.status(200).json(tasks)];
        }
    });
}); };
exports.getAllTasks = getAllTasks;
var deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, taskId, deletedTask, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, userId = _a.userId, taskId = _a.taskId;
                return [4 /*yield*/, taskService_1.default.deleteTask(Number(userId), Number(taskId))];
            case 1:
                deletedTask = _b.sent();
                if (!deletedTask) {
                    return [2 /*return*/, res.status(401).json({
                            message: 'Tarefa não encontrada'
                        })];
                }
                return [2 /*return*/, res.status(204).json()];
            case 2:
                error_2 = _b.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500).json({ message: 'Erro interno' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = deleteTask;
var updateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, taskId, taskName, updatedTask, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, userId = _a.userId, taskId = _a.taskId;
                taskName = req.body.taskName;
                return [4 /*yield*/, taskService_1.default.updateTask(Number(userId), Number(taskId), taskName)];
            case 1:
                updatedTask = _b.sent();
                if (!updatedTask) {
                    return [2 /*return*/, res.status(401).json({
                            message: 'Tarefa não encontrada'
                        })];
                }
                return [2 /*return*/, res.status(201).json({
                        message: 'Tarefa atualizada com sucesso'
                    })];
            case 2:
                error_3 = _b.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({ message: 'Erro interno' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTask = updateTask;

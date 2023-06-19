"use strict";
var validateTaskId = function (req, res, next) {
    var id = req.params.id;
    if (!id || id === '') {
        return res.status(422).json({ message: 'Formato inválido' });
    }
    if (typeof Number(id) !== 'number' || !Number.isInteger(Number(id))) {
        return res.status(422).json({ message: 'Id deve ser um número inteiro' });
    }
    next();
};
var validateTaskAndUserId = function (req, res, next) {
    var _a = req.params, userId = _a.userId, taskId = _a.taskId;
    if (!Number.isInteger(Number(userId)) || !Number.isInteger(Number(taskId))) {
        return res.status(422).json({
            message: 'userId e taskId devem ser um número inteiro'
        });
    }
    next();
};
var validateTaskName = function (req, res, next) {
    var taskName = req.body.taskName;
    if (!taskName) {
        return res.status(422).json({
            message: 'O campo taskName é obrigatório'
        });
    }
    next();
};
module.exports = {
    validateTaskId: validateTaskId,
    validateTaskAndUserId: validateTaskAndUserId,
    validateTaskName: validateTaskName
};

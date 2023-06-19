"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwt = void 0;
var authFunctions_1 = require("../utils/authFunctions");
var validateJwt = function (req, res, next) {
    try {
        var token = req.headers.authorization;
        if (!token)
            return res.status(401).json({ message: 'Token não encontrado' });
        (0, authFunctions_1.verifyToken)(token);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro interno' });
    }
};
exports.validateJwt = validateJwt;

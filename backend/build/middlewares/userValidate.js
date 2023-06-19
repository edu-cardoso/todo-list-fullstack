"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var validateEmail = function (email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
var validateUser = function (req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!validateEmail(email)) {
        return res.status(400).json({
            "message": "Insira um email com formato válido"
        });
    }
    if (!email || !password) {
        return res.status(400).json({
            "message": "Os campos email e password são obrigatórios"
        });
    }
    next();
};
exports.validateUser = validateUser;

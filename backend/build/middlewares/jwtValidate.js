"use strict";
var verifyToken = require('../utils/authFunctions').verifyToken;
var validateJwt = function (req, res, next) {
    try {
        var token = req.headers.authorization;
        if (!token)
            return res.status(401).json({ message: 'Token não encontrado' });
        var payload = verifyToken(token);
        req.payload = payload;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro interno' });
    }
};
module.exports = validateJwt;

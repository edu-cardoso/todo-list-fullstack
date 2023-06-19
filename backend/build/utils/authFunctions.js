"use strict";
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET || 'anything';
var JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '10d',
};
var verifyToken = function (token) { return jwt.verify(token, secret); };
var createToken = function (payload) {
    return jwt.sign({ data: payload }, secret, JWT_CONFIG);
};
module.exports = { verifyToken: verifyToken, createToken: createToken };

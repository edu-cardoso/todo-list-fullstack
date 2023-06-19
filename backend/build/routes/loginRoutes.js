"use strict";
var express = require('express');
var loginRoutes = express.Router();
var login = require('../controllers/login').login;
var validateUser = require('../middlewares/userValidate');
loginRoutes.post('/', validateUser, login);
module.exports = loginRoutes;

"use strict";
var express = require('express');
var userRoutes = express.Router();
var createUser = require('../controllers/users').createUser;
var validateUser = require('../middlewares/userValidate');
userRoutes.post('/', validateUser, createUser);
module.exports = userRoutes;

const express = require('express');
const loginRoutes = express.Router();

const { login }  = require('../controllers/login');
const validateUser = require('../middlewares/userValidate');

loginRoutes.post('/', validateUser, login);

module.exports = loginRoutes;
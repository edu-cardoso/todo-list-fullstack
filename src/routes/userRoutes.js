const express = require('express');
const userRoutes = express.Router();

const { createUser } = require('../controllers/users');
const validateUser = require('../middlewares/userValidate');

userRoutes.post('/', validateUser, createUser);

module.exports = userRoutes;


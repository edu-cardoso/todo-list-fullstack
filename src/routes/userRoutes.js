const express = require('express');
const userRoutes = express.Router();

const { createUser } = require('../controllers/users');

userRoutes.post('/', createUser);

module.exports = userRoutes;


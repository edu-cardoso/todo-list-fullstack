"use strict";
var express = require('express');
var cors = require('cors');
var userRoutes = require('./routes/userRoutes');
var loginRoutes = require('./routes/loginRoutes');
var taskRoutes = require('./routes/taskRoutes');
var app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', taskRoutes);
module.exports = app;
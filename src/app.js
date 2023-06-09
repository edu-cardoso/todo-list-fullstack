const express = require('express');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', taskRoutes);


module.exports = app;
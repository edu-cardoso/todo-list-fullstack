const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors())

app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/tasks', taskRoutes);


module.exports = app;
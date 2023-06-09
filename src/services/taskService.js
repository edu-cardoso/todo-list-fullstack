const { Task } = require('../models');

const createTask = async ({ taskName, userId }) => await Task.create({ 
  taskName, 
  userId 
});


const getAllTasks = async (userId) => await Task.findAll({ 
  where: { userId }
});

module.exports = {
  createTask,
  getAllTasks
}
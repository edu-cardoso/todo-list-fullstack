const { Task } = require('../models');

const createTask = async ({ taskName, userId }) => await Task.create({ 
  taskName, 
  userId 
});

const getAllTasks = async (userId) => await Task.findAll({ 
  where: { userId }
});

const deleteTask = ({ userId, taskId }) => Task.destroy({ 
  where: { userId, id: taskId }
});

const updateTask = async ({ userId, taskId, taskName }) => {
  const [updatedTask] = await Task.update(
    { taskName },
    { where: { userId, id: taskId } }
  );

  return updatedTask;
}

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
}
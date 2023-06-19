import Task from '../database/models/Task';

type TaskType = {
  id: number,
  taskName: string,
  userId: number
}

const createTask = async (taskName: string, userId: number): Promise<TaskType> => {
  const { dataValues } = await Task.create({ 
    taskName, 
    userId 
  });
  return dataValues;
}

const getAllTasks = async (userId: number) => await Task.findAll({ 
  where: { userId }
});

const deleteTask = async (userId: number, taskId: number ): Promise<number> => await Task.destroy({ 
  where: { userId, id: taskId }
});

const updateTask = async (userId: number, taskId: number, taskName: string): Promise<number> => {
  const [updatedTask] = await Task.update(
    { taskName },
    { where: { userId, id: taskId } }
  );

  return updatedTask;
}

export default {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
}
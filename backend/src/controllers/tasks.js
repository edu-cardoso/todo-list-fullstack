const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const { taskName } = req.body;
    const payload = req.payload;

    const task = await taskService.createTask({ 
      taskName,
      userId: payload.data.userId 
    });

    return res.status(200).json({ 
      message: 'Tarefa criada com sucesso', 
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno' });
  }
};

const getAllTasks = async (req, res) => {
  const { id } = req.params;

  const tasks = await taskService.getAllTasks(id);

  if(tasks.length === 0) {
    return res.status(401).json({ 
      message: 'Nenhuma tarefa encontrada' });
  }

  return res.status(200).json(tasks);
};

const deleteTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    const deletedTask = await taskService.deleteTask({ userId, taskId });

    if(!deletedTask) {
      return res.status(401).json({ 
        message: 'Tarefa não encontrada' 
      });
    }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const { taskName } = req.body;

    const updatedTask = await taskService.updateTask({ userId, taskId, taskName });
    if(!updatedTask) {
      return res.status(401).json({ 
        message: 'Tarefa não encontrada' 
      });
    }

    return res.status(201).json({ 
      message: 'Tarefa atualizada com sucesso'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
}
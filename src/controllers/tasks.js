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
      message: 'Nenhuma task encontrada' });
  }

  return res.status(200).json(tasks);
};



module.exports = {
  createTask,
  getAllTasks
}
import { Request, Response } from 'express';
import taskService from '../services/taskService';

const createTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { taskName, userId } = req.body;
    
    const task = await taskService.createTask(taskName, userId);

    return res.status(200).json({ 
      message: 'Tarefa criada com sucesso', 
      task,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getAllTasks = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const tasks = await taskService.getAllTasks(Number(id));

  if(tasks.length === 0) {
    return res.status(401).json({ 
      message: 'Nenhuma tarefa encontrada' });
  }

  return res.status(200).json(tasks);
};

const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, taskId } = req.params;

    const deletedTask = await taskService.deleteTask(Number(userId), Number(taskId));

    if(!deletedTask) {
      return res.status(401).json({ 
        message: 'Tarefa não encontrada' 
      });
    }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const updateTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, taskId } = req.params;
    const { taskName } = req.body;

    const updatedTask = await taskService.updateTask(Number(userId), Number(taskId), taskName);
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
    return res.status(500).json({ message: 'Erro interno' });
  }
};

export {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
}
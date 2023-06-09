const validateTaskId = (req, res, next) => {
  const { id } = req.params;

  if (!id || id === '') {
    return res.status(422).json({ message: 'Formato inválido' });
  }
  
  if (typeof Number(id) !== 'number' || !Number.isInteger(Number(id))) {
    return res.status(422).json({ message: 'Id deve ser um número inteiro' });
  }

  next();
};

const validateTaskDeletion = (req, res, next) => {
  const { userId, taskId } = req.params;

  if (!Number.isInteger(Number(userId)) || !Number.isInteger(Number(taskId))) {
    return res.status(422).json({ 
      message: 'userId e taskId devem ser um número inteiro' 
    });
  }
  next();
};

module.exports = {
  validateTaskId,
  validateTaskDeletion
};
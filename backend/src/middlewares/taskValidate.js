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

const validateTaskAndUserId = (req, res, next) => {
  const { userId, taskId } = req.params;

  if (!Number.isInteger(Number(userId)) || !Number.isInteger(Number(taskId))) {
    return res.status(422).json({ 
      message: 'userId e taskId devem ser um número inteiro' 
    });
  }
  next();
};

const validateTaskName = (req, res, next) => {
  const { taskName } = req.body;

  if (!taskName) {
    return res.status(422).json({ 
      message: 'O campo taskName é obrigatório' 
    });
  }
  next();
};

module.exports = {
  validateTaskId,
  validateTaskAndUserId,
  validateTaskName
};
const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ 
      "message": "Os campos email e password são obrigatórios" 
    });
  }
  next();
}

module.exports = validateUser;


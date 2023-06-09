const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  if(!validateEmail(email)) {
    return res.status(400).json({ 
      "message": "Insira um email com formato válido" 
    });
  }
  if (!email || !password) {
    return res.status(400).json({ 
      "message": "Os campos email e password são obrigatórios" 
    });
  }
  next();
}

module.exports = validateUser;


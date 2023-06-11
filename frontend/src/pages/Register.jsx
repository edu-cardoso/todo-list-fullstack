import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const request = await axios.post(
        'http://localhost:5000/users',
        user
      );

      if(request.status === 201) {
        alert('Cadastro realizado com sucesso');
        setTimeout(navigate('/login'), 4000)
      }
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <div>
      <h4>Cadastrar</h4>
      <form onSubmit={ handleSubmit }>
        <label>
          Email
            <input 
              type="email" 
              name="email"
              value={ user.email }
              onChange={ handleChange }
              />
        </label>
        <label>
          Senha
            <input 
              type="password"
              name="password"
              value={ user.password } 
              onChange={ handleChange }
            />
        </label>
        <button>
          Criar conta
        </button>
      </form>
    </div>
  )
}

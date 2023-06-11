import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
        'http://localhost:5000/login',
        user
      );

      if(request.status === 200) {
        navigate('/tasks');
        localStorage.setItem('token', request.data.token);
      }

      console.log(request)
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <div>
      <h4>Entrar</h4>
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
          Entrar
        </button>
      </form>
    </div>
  )
}

import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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

      console.log(request)
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <div>
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

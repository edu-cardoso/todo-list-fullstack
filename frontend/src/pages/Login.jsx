import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";
import Logo from "../assets/Logo.svg"
import { toast } from 'react-toastify';

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
        'http://localhost:5000/login',
        user
      );

      console.log(request);

      if (request.status === 200) {
        toast.success('Login efetuado com sucesso', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          navigate('/tasks')
        }, 2000);
        
        localStorage.setItem('token', request.data.token);
        localStorage.setItem('userId', request.data.userId);
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <form
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <img 
          src={ Logo } 
          className={styles.logo}
        />
        <h4>Login</h4>
        <p className={styles.label}>Email *</p>
        <div className={styles.inputEmail}>
          <span className="material-symbols-outlined">
            mail
          </span>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="email@email.com"
          />
        </div>
        <p className={styles.label}>Senha *</p>
        <div className={styles.inputPassword}>
          <span className="material-symbols-outlined">
            lock
          </span>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
        </div>
        <button className={styles.registerBtn}>
          Entrar
        </button>
      </form>
    </div>
  )
}
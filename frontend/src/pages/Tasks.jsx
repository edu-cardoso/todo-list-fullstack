import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const token = localStorage.getItem('token');
  
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputTask(value);
  };

  async function getTasks() {
    try {
      const userId = localStorage.getItem('userId');

      const request = await axios.get(
        `http://localhost:5000/tasks/${userId}`,
      );

      setTasks(request.data)

    } catch (err) {
      console.log(err)
    }
  }

  const createTask = async () => {
    try {
      await axios.post(
        'http://localhost:5000/tasks',
        {
          taskName: inputTask
        },
        {
          headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }}
      );

      setInputTask('');

      await getTasks();

    } catch (err) {
      console.log(err)
    }
  }

  const deleteTask = async (userId, taskId) => {
    try {
      await axios.delete(
        `http://localhost:5000/tasks/${userId}/${taskId}`,
        {
          headers: {
          'Authorization': token,
        }}
      );

      await getTasks();

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTasks()
  },[]) 

  return (
    <div>
      <input 
        type="text" 
        value={ inputTask }
        onChange={ handleInputChange }
      />
      <button 
        onClick={ createTask }
      >
        Criar
      </button>
      {tasks.map(({ id, taskName, userId }) => (
        <div key={ id }> 
          <p>{ taskName }</p>
          <button 
            onClick={ () => deleteTask(userId, id)}
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  )
}
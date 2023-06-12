import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputTask(value);
  };

  const createTask = async () => {
    try {
      const token = localStorage.getItem('token');

      const request = await axios.post(
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

      setTasks([
        ...tasks,
        request.data.task
      ]);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
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
    getTasks()
  },[]) 

  return (
    <div>
      <input 
        type="text" 
        value={ inputTask }
        onChange={ handleInputChange }
      />
      <button onClick={ createTask }>Criar</button>
      {tasks.map(({ id, taskName }) => (
        <div key={ id }> 
          <p>{ taskName }</p>
        </div>
      ))}
    </div>
  )
}
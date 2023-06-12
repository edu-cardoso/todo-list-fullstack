import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

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
      {tasks.map(({ id, taskName }) => (
        <div key={ id }> 
          <p>{ taskName }</p>
        </div>
      ))}
    </div>
  )
}
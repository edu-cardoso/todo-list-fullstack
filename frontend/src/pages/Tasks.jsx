import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputTask(value);
  };

  async function getTasks() {
    try {
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
          }
        }
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
          }
        }
      );

      await getTasks();

    } catch (err) {
      console.log(err)
    }
  }

  const updateTask = async (userId, taskId) => {
    try {
      await axios.put(
        `http://localhost:5000/tasks/${userId}/${taskId}`,
        {
          taskName: inputTask
        },
        {
          headers: {
            'Authorization': token,
          }
        }
      );

      setInputTask('');
      await getTasks();
      setEditMode(false);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <input
        type="text"
        value={inputTask}
        onChange={handleInputChange}
      />
      {
        editMode ?
          <button
            onClick={() => updateTask(userId, taskToEdit)}
            disabled={inputTask.length < 3}
          >
            Editar
          </button> :
          <button
            onClick={createTask}
            disabled={inputTask.length < 3}
          >
            Criar
          </button>
      }
      {tasks.map(({ id, taskName, userId }) => (
        <div key={id}>
          <p>{taskName}</p>
          <button
            onClick={() => {
              setEditMode(true);
              setTaskToEdit(id);
            }}
          >
            <span className="material-symbols-outlined">
              edit_note
            </span>
          </button>
          <button
            onClick={() => deleteTask(userId, id)}
          >
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}
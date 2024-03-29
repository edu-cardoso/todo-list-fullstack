import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Tasks.module.css";
import Logo from "../assets/Logo.svg";
import { toast } from 'react-toastify';

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
          taskName: inputTask,
          userId
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
      
      if(tasks.length > 1) {
        await getTasks();
      } else {
        setTasks([])
      }
      

    } catch (err) {
      console.log(err)
    }
  }

  const updateTask = async (userId, taskId) => {
    try {
      const request = await axios.put(
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
      
      if (request.status === 201) { 
        toast.success('Tarefa editada com sucesso', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setInputTask('');
        await getTasks();
        setEditMode(false);
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <div className={styles.inputTask}>
        <input
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Adicione uma nova tarefa"
        />
        {
          editMode ?
            <button
              onClick={() => updateTask(userId, taskToEdit)}
              disabled={inputTask.length < 3}
              className={styles.editTaskBtn}
            >
              Editar
            </button> :
            <button
              onClick={createTask}
              disabled={inputTask.length < 3}
              className={styles.createTaskBtn}
            >
              Criar
            </button>
        }
      </div>
      {(inputTask.length > 0 && inputTask.length < 3) && 
        <p className={styles.taskLength}>Sua tarefa deve conter ao menos 3 caractéres</p>
      }
      {tasks.length === 0 && <p className={styles.noTasks}>Nenhuma tarefa encontrada</p>}
      {tasks.map(({ id, taskName, userId }) => (
        <div key={id} className={styles.tasks}>
          <p>{taskName}</p>
          <div className={styles.taskBtnsContainer}>
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
        </div>
      ))}
    </div>
  )
}
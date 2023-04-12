import { useQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";
import { GET_ALL_TASKS } from "./querys";
import { CreateTask } from './components/CreateTask';

function App() {
	const { loading, error, data, refetch } = useQuery(GET_ALL_TASKS)
  const [tasks, setTasks] = useState([])

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask])
    refetch()
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {data.allTasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <CreateTask onCreateTask={handleCreateTask} />
    </div>
  )
}

export default App;

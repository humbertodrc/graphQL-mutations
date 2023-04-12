import { useQuery } from "@apollo/client";
import "./App.css";
import { CreateTask } from './components/CreateTask';
import { GET_ALL_TASKS } from "./querys";

function App() {
	const { loading, error, data, refetch } = useQuery(GET_ALL_TASKS)

  const handleCreateTask = () => {
    refetch()
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {data?.allTasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      <CreateTask onCreateTask={handleCreateTask} />
    </div>
  )
}

export default App;

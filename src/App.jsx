import { useQuery } from '@apollo/client';
import './App.css'
// import { AddCountry } from './components/AddCountry'
// import { Country } from './components/Country'
import { GET_TASK } from './querys';

function App() {

  const { loading, error, data } = useQuery(GET_TASK);

  console.log(data.allTasks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data?.allTasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        ))}
      
      {/* <Country />
      <AddCountry /> */}
    </div>
  )
}

export default App

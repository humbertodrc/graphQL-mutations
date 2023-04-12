import './App.css'
import { AddCountry } from './components/AddCountry'
import { Country } from './components/Country'

function App() {

  return (
    <div className="App">
      <Country />
      <AddCountry />
    </div>
  )
}

export default App

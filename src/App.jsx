import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App

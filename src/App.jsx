import './App.css'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <h1>
        People Be Poopin
      </h1>
      <Outlet />
    </div>
  )
}

export default App
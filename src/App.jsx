import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import RoleList from './components/RoleList'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center'>
        <NavBar />
      </div>
      <div className='flex flex-row flex-wrap justify-center p-4'>

        <Outlet />

      </div>

    </>
  )
}

export default App

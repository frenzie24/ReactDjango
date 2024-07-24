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
    <div className='w-screen h-screen bg-gray-950'>
    <div className='lg:max-w-screen-lg md:max-w-screen-sm sm:max-w-[300px] h-screen bg-gray-200 mx-auto'>
      <div className='flex flex-row flex-wrap justify-center '>
        <NavBar />
      </div>
      <div className='flex flex-row flex-wrap justify-center p-4'>

        <Outlet />

      </div>
    </div>
    </div>
  )
}

export default App

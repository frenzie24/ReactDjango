import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Home from './views/Home.jsx'
import UserList from './components/UserList'
import RoleList from './components/RoleList'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/RoleList',
        element: <RoleList />
      },
      {
        path: '/UserList',
        element: <UserList />,
      },

    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

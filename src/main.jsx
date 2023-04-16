import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/main'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import Order from './components/Orders/Order'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './components/Profile/Profile'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/homePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './pages/blogs'
import Internships from './pages/internships'
import ApplicationForm from './pages/applicationForm'
import Farm from './pages/farm'
import './App'
import SingleBlog from './pages/singleBlog'
import Login from './pages/login'
import Register from './pages/register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/farm/:id',
    element: <Farm />
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/internships',
    element: <Internships />
  },
  {
    path: '/applicationForm',
    element: <ApplicationForm />
  },
  {
    path: '/blogDetail/:id',
    element: <SingleBlog />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

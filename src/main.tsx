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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/farm',
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
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

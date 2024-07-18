import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/homePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './pages/blogs'
import Internships from './pages/internships'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/internships',
    element: <Internships />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './authProvider'
import HomePage from './pages/homePage'
import Blogs from './pages/blogs'
import Internships from './pages/internships'
import ApplicationForm from './pages/applicationForm'
import Farm from './pages/farm'
import SingleBlog from './pages/singleBlog'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notFound'
import './App'
import UserDataForm from './pages/userDataForm'
import CVPreview from './pages/cvPreview'
import TemplateSelect from './pages/templateSelect'
import FormSection from './pages/resumes/resume/FormSection'
import EditResume from './pages/editResume'
import Resumes from './pages/resumes'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/farm/:id', element: <Farm /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/internships', element: <Internships /> },
  { path: '/applicationForm', element: <ApplicationForm /> },
  { path: '/blogDetail/:id', element: <SingleBlog /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {path: '/userDataForm', element: <UserDataForm />},
  {path: '/resumeForm', element: <EditResume />},
  {path: '/templates', element: <TemplateSelect />},
  {path: '/cvPreview', element: <CVPreview />},
  {path: '/resumes', element: <Resumes />},
  {path: '/resumes/resume/:resumeId/edit', element: <EditResume />},
  { path:'/my-resume/:resumeId/view', element: <CVPreview/>},


  
  { path: '*', element: <NotFound /> } // 404 route
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

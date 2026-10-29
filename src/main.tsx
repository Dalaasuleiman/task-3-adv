import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/pages/Root.tsx'
import HomePage from './components/pages/HomePage.tsx'
import AboutPage from './components/pages/AboutPage.tsx'
import AcademicsPage from './components/pages/AcademicsPage.tsx'
import AdmissionsPage from './components/pages/AdmissionsPage.tsx'
import StudentLifePage from './components/pages/StudentLifePage.tsx'
import ContactPage from './components/pages/ContactPage.tsx'
  const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children : [
      {
        path : "",
        element : <HomePage/>
      },
      {
        path : "about",
        element : <AboutPage/>
      },
      {
        path : "academics",
        element : <AcademicsPage/>
      },
      {
        path : "admissions",
        element : <AdmissionsPage/>
      },
      {
        path : "studentLife",
        element : <StudentLifePage/>
      },
      {
        path : "contact",
        element : <ContactPage/>
      },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
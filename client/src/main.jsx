import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Conatcts from './Components/Conatcts.jsx'
import Signin from './Components/Signin.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/></>,
  },
  {
    path: "/About",
    element:  <><Navbar/><About/></>
  },
  {
    path: "/Services",
    element: <><Navbar/><Services/></>
  },
  {
    path: "/Conatcts",
    element: <><Navbar/><Conatcts/></>
  },
  {
    path: "/Signin",
    element: <><Navbar/><Signin/></>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

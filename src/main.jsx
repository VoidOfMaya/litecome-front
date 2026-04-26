import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Signup } from './components/signup/signup.jsx'
import { Channel } from './components/channel/channel.jsx'
import { Profile } from './components/profile/profile.jsx'

//page routing
const router = createBrowserRouter([
  {path:'/', element: <App />,
    children: [
      {path:'/home', element: <Signup />},
      {path:'/chatter', element:<Channel/>},
      {path: '/profile', element:<Profile/>}
    ],
    errorElement:<h1>Error Page!</h1>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

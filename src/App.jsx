import { useState } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const redirect = useNavigate();
  const [auth, setAuth]= useState({})


  return (
    <>
      <Outlet cotnext={{

      }}/>
    </>
  )
}

export default App

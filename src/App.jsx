import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const redirect = useNavigate();
  const [auth, setAuth]= useState({})

  useEffect(()=>{
    if(auth){
      redirect("/chatter");
    }else{
      redirect("/home")
    }
  },[auth, redirect])
  return (
    <>
      <Outlet cotnext={{

      }}/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Signup } from './components/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height: '100%'}}>
      <Signup />   
    </div>
  )
}

export default App

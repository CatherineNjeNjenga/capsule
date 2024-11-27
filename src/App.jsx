import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Logo } from './assets/logo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
    >
      <Logo width='80' height='80'/>
      <h1>Capsule</h1>
    </div>
  )
}

export default App

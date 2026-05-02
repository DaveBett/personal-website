import { useState } from 'react'
import Summary from './components/Summary'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Summary />
    </>
  )
}

export default App

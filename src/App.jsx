import { useState } from 'react'
import Summary from './components/Summary'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <Summary />
    </section>

    <section>
      <Portfolio />
    </section>
    </>
  )
}

export default App

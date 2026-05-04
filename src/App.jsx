import { useState } from 'react'
import Summary from './components/Summary'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
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


      <section>
        <Contacts />
      </section>


      <section>
        <Footer />
      </section>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log('clicked' , counter)
    setCounter(counter+1)
  }

  const decreaseValue = function() {
    if(counter > 0) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>counter : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App

import { useState } from "react"

function App() {
  const[color, setColor] = useState("yellow")
  return (
    
    <div className="w-screen h-screen duration-200 flex items-center justify-center"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl" >
            <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "red"}}
            >Red</button>

            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "green"}}
            >green</button>

            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "blue"}}
            >blue</button>

            <button 
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "purple"}}
            >purple</button>
          </div>
        </div>
    </div>
  )
}

export default App

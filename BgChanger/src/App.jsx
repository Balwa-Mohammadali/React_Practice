import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setColor] = useState("olive")

   

  return (
    <div className=" w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
 
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className=" flex flex-wrap justify-center rounded-xl px-3 py-2 bg-white gap-3 shadow-lg">
        <button className="outline-none px-3 py-2 rounded-full bg-red-600"
        onClick={()=>setColor("red")}>red</button>

        <button className="outline-none px-3 py-2 rounded-full bg-green-600"
        onClick={()=>setColor("green")}>green</button>

        <button className="outline-none px-3 py-2 rounded-full bg-blue-600"
        onClick={()=>setColor("blue")}>blue</button>

        <button className="outline-none px-3 py-2 rounded-full bg-yellow-600"
        onClick={()=>setColor("yellow")}>yellow</button>

        <button className="outline-none px-3 py-2 rounded-full bg-pink-600"
        onClick={()=>setColor("pink")}>pink</button>

        <button className="outline-none px-3 py-2 rounded-full bg-black text-white"
        onClick={()=>setColor("black")}>black</button>        
       </div>
     </div>
    </div>
  )
}

export default App

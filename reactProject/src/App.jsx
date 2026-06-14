import { useState } from "react"

function App() {

  let [counter,setCounter]=useState(15)

   let add = () =>{
    if(counter <= 20) 
      {setCounter(preCounter=>preCounter+1)
        setCounter(preCounter=>preCounter+1)
        setCounter(preCounter=>preCounter+1)

       }
   }

   let remove = () =>{
    if(counter!==0) setCounter(counter-1)
   }


  return (
    <>
   <h1>chai or m.k</h1>
   <h2>counter{counter}</h2>
   <button onClick={add}>add count{counter}</button>
   <br/>
   <button onClick={remove}>remove count{counter}</button>
   </>
  )
}

export default App

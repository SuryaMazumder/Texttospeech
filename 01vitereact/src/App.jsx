import { useState } from "react";



function App() {
    

   let [counter,setCounter]=useState(15)
   let addCount=()=>{
    setCounter(counter+1);
    console.log('counter',counter)
   }
   let removeCount=()=>{
    setCounter(counter-1);
    console.log('counter',counter)
   }

  return (
    <>
    <h1>React hook practice {counter}</h1>
    <button onClick={addCount}>Add Counter</button>
    <br></br>
    <button onClick={removeCount}>Remove Counter</button>
    </>
  )
}

export default App

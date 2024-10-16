import React, {useState} from 'react'

function Counter() {
    const[counter ,setcounter] = useState(0);

    const decrement = () =>{
      setcounter(counter-1)
    }
  return (
    <>
    <h1>===== Counter =====</h1><br /><br />

    <center>

        <h2>Count Number : {counter}</h2><br />

        <button onClick={()=> setcounter(counter + 1)}>increment</button><br /><br />

        <button onClick={decrement}>decrement</button> 
        
    </center>
    </>
  )
}

export default Counter;

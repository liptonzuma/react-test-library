import React, { useEffect, useState } from 'react'
import Todos from '../todo/Todos';

function Input() {

    const [todos,setTodos]=useState([]);
    // input state
    const [input,setInput]= useState("")

    // handle button press
    function handleButtonPress(e){
        e.preventDefault()
        input.length?  setTodos(todos.concat(input)) : alert("Please enter something")
        setInput("")

    }

    // end of handling button press


  return (
    <div >

        <form
        style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
        }}
        >
        <input placeholder='enter text' 
        style={{
            width:"70%"
        }} 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        />
        <button style={{
            width:"25%"
        }}
        type="submit"
            onClick={handleButtonPress}
        >save</button>
        </form>
        
        <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Input
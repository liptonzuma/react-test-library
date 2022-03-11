import React, { useState } from 'react'

function Input() {

    // input state
    const [input,setInput]= useState("")

    // handle button press
    function handleButtonPress(e){
        e.preventDefault()
        setInput("")
    }

    // end of handling button press

  return (
    <div style={{
        display:"flex",
        justifyContent:"center"
    }}>
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
            onClick={handleButtonPress}
        >save</button>
    </div>
  )
}

export default Input
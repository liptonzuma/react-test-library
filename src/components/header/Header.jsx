import React from 'react'

function Header({header}) {
  return (
    <h1 style={{
        background:"black",
        marginTop:0,
        color:"white",
        textTransform:"uppercase",
        textAlign:"center",
        padding:"1rem",
        fontStyle:"italic",
        fontSize:"1.7rem"
    }}>{header}</h1>
  )
}

export default Header
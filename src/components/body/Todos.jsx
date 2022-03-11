import React from 'react'

function Todos({todos}) {
  return (
    <div style={{
    }}>
        {/* display todos */}
       <ul>
       {todos.length && todos.map(todo=><li key={todo}>{todo}</li>)}
        </ul> 
    </div>
  )
}

export default Todos
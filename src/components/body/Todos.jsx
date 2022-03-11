import React from "react";

function Todos({ todos,setTodos }) {
    
    function remove(todo){
        setTodos(todos.filter(e=>e !== todo))
    }

    

    return (
        <div style={{}}>
            {/* display todos */}
            <ul>
                {todos.length && todos.map((todo) =>
             <li onDoubleClick={()=>remove(todo)} 
             key={todo}>{todo}
             </li>)
             }</ul>
        </div>
    );
}

export default Todos;

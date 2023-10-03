import React from 'react'
import memo from 'react'

function Todos(todos,addTodos) {
    console.log('child rendered');
  return (
    <div>
        <h1>my todos</h1>
        {todos.Map((todos,index)=>
        {
            return <p ket={index}>{todos}</p>
        })}
      <button onClick={addTodos}>Add Todos</button>
    </div>
  )
}
export default memo(Todos);

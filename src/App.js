import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ReactDoM from 'react-dom/client'
import {Todos} from './Todos'

function App() {
  const [count,setCount]=useState(0);
  const [todos,setTodos]=useState([]);

  const increment=()=>
    setCount((c)=>{
      c+1;
    });
  
    const addTodos=()=>{
      setTodos((t)=>{
        [...t,"Todos"]
      });
    }
  return (
    <>
    <Todos todos={todos} addTodos={addTodos}/>
      <hr/>
      <div>
        count:{count}
        <button onclick={increment}>+</button>
      </div>
      </>
  )
}

export default App;

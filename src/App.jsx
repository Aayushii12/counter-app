import React,{useState} from 'react'
import "./App.css";
const App = () => {
  const[count,setCount]=useState(0);
  return (
    <div className='app'>
      <h1>Increment decrement counter</h1>
      <div className="box">
       <button onClick={() =>setCount(count+1)}>incremnet</button>
       <h1>{count}</h1>
       <button onClick={() =>setCount(count-1)}>decrement</button>

      </div>
    </div>
  )
}

export default App

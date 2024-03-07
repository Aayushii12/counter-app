import {useState} from 'react'
import "./App.css";
import Button from './Component/Button/Button';
const App = () => {
  const[count,setCount]=useState(0);
  const incremnetFunc=()=>{
    setCount(count+1);
  }
  const decrementFunc=()=>{
    
    if (count!==0) {
      setCount(count-1) 
    }
  }
  return (
    <div className='app'>
      <h1>Increment decrement counter</h1>
      <div className="box">
        <Button name={"increment"} buttonFunc={incremnetFunc}/>
       <h1>{count}</h1>
       <Button name={"decrement"} buttonFunc={decrementFunc}/>
       

      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import "./App.css";
import Button from './Component/Button/Button';
const App = () => {
  const [count, setCount] = useState(0);
  const incrementFunc = () => {
    setCount(count + 1);
  }
  const decrementFunc = () => {
    setCount(count - 1);
  }
  return (
    <div className='app'>
      <h1>Increment decrement counter</h1>
      <div className="box">
        <Button name={"increment"} buttonFunc={incrementFunc}/>
        <h1>{count}</h1>
        <Button name={"decrement"} buttonFunc={decrementFunc}/>
        <Button name={"search"} buttonFunc={''}/>
      </div>
    </div>
  )
}

export default App

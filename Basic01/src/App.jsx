import {useState} from 'react';
import './App.css'

function App() {

  let [counter , setCounter] = useState(15);

  // counter = 15;
  
  const addValue = ()=>{
    counter = counter + 1;
    if(counter > 20){
      counter = 20;
    }
    setCounter(counter);
    console.log(counter);
  }

  const DecValue = ()=>{
    counter = counter - 1;
    if(counter < 0){
      counter = 0;
    }
    setCounter(counter);
    console.log(counter);
  }

  return (
    <>
      <h2>Nikhil Swami</h2>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Up</button>
      <br/>
      <br/>
      <button onClick={DecValue}>Down</button>
    </>
  )
}

export default App

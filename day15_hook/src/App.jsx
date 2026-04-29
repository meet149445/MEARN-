import React from 'react'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  let [count,setCount] = useState(0);
  let [timeSpent , setTimeSpent]=useState(0);
  let [name,setName] = useState('');
  let [email,setEmail] = useState('');

  function increment(){
    setCount(count + 1);
    console.log('Counter incremented :', count)
  }
  function reset(){
    setCount(0);
    console.log('Counter is reset', count)
  }

  useEffect(()=>{
    const interval = setInterval(()=>  {
    setTimeSpent(prevTime => prevTime + 1);
    console.log('Time spent on this page is :', timeSpent + 1 ,'Seconds');
  },1000);
  return ()=> clearInterval(interval);
},[]);

let handleChange = (e)=>{
  // console.log(e.target.value);
  if (e.target.name === 'name'){
    setName(e.target.value);
  }
  else if(e.target.name === 'email'){
    setEmail(e.target.value);
  }
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log('UserName: ',name ,'UserEmail: ', email);
}

  return (
    <>
    
    <div className='App'>
      <h1>Time spend on page</h1>
      <p>{timeSpent}</p>
      <br />
      <p>Click button to increment the counter</p>
      <button onClick={increment}>Click</button>
      <p>Counter:{count}</p>
      <br />
      <p>Click button to reset counter</p>
      <button onClick={reset }>Reset</button>
    </div>

    <form className='form' onSubmit={handleSubmit}>
      <h2>FormExanple</h2>
      <br />
      <p>Fillout the form below</p>
      <br />
      <div className="username">
        <label>Name : </label>
        <input type="text" name="name" onChange={handleChange}/>
      </div>
      <div className="email">
        <label>E-mail : </label>
        <input type="email" name="email" onChange={handleChange}/>
        <br />
        <button type='submit'>Submit</button>
      </div>
    </form>
    </>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={()=>{alert('button 3 clicked')}}>click me3</button>
      <button onClick={()=> addToFive(3)}>click me4</button>
    </>
  )
}

export default App

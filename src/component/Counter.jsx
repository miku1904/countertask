import React, { useState } from 'react'
import Error from './error';

const Counter = () => {
    const [count,setCount]= useState(0);

    let increaseCount =()=>{
        setCount(count + 1)
    };
    
    let decreaseCount = () =>{
        setCount(count - 1)
    } 


  return (
    <>
    <Error count={count} error="Counter Less then 25" />
    <div className='counter'>
    <h1>{count}</h1>
    </div>
    <div className='counter'>
      <button onClick={increaseCount}>+ value</button>
      <button onClick={decreaseCount}>- value</button>
    </div>

    </>
  )
}

export default Counter

import React, { useState } from 'react'

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

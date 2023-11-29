import './ItemCount.css'
import { useState } from 'react'

 const ItemCount = () => {
  const[count, setCount]= useState(0);
  const incremet = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    if (count === 0) {
      return setCount(0);
    }
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
}
  return (
    <>
    <div className='Count'>
      <div className='CountButtons'>
      <button onClick={incremet}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      </div>
      <button onClick={reset}>reset</button>
    </div>
    </>
  )
}



export default ItemCount
import React from 'react'
import useCounter from '../Hooks/useCounter'

function Counterones() {
    const[count,increment,decrement,reset]=useCounter()
  return (
    <div>
        <h1>count -{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counterones
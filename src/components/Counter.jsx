import React, {useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)

    const handleClick_add = () => {
        setCount(count + 1)
    }

    const handleClick_sub = () => {
        setCount(count - 1)
    }

    return <>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick_add}> + </button>
      <button onClick={handleClick_sub}> - </button>
    </>
  }

export default Counter
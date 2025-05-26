import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [count, setCount] = useState(0)

    const myCount = () => {
        setCount(count + 1)
    }

    const myFunc = useCallback(() => {
        console.log("Hey i am rendering brother")
    }, [])

  return (
    <div>
      <h1>Hey i am Parent</h1>
      <Child btn= "Child button" func={myFunc}/>
      <br />
      <button onClick={myCount}>Click Me {count}</button>
    </div>
  )
}

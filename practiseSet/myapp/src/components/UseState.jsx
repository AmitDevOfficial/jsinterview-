import React, { useState } from 'react'

export default function UseState() {

    const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

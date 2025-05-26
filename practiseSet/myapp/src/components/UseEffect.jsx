import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    
    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title = count
    }, [count])
    
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

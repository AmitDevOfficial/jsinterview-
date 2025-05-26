import React, { useLayoutEffect, useState } from 'react'

export default function UseLayOut() {
    const [color, setColor] = useState([]);

    useLayoutEffect(() => {
      document.body.style.backgroundColor = color;
    }, [color])
    
  return (
    <div>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('blue')}>Blue</button>
    </div>
  )
}

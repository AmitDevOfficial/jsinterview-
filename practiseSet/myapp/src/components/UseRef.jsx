import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0)
    let btnClr = useRef();
    
    function handCount() {
        setCount(count + 1)
    }
    function chngClr() {
        btnClr.current.style.backgroundColor = "red"
    }

    return (
        <div>
            <button ref={btnClr} onClick={handCount}>Click {count}</button>
            <button onClick={chngClr}>Click {count}</button>
        </div>
    )
}

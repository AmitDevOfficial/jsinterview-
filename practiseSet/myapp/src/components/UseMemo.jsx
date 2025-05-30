import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    function add(){
        setCountOne(countOne + 1);
        console.log("Hey i am Delay")
    }

    function sub(){
        setCountTwo(countTwo + 1);
    }

    const isEven =  useMemo(() => {
        let i = 0;
        while(i<2000000000)i++
        return countOne%2 === 0
    }, [countOne])

   
  return (
    <div>
      <button onClick={add}>Count {countOne}</button>
      {isEven ? "Even": "Odd"}
      <button onClick={sub}>Count {countTwo}</button>
    </div>
  )
}

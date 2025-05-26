import React, { useEffect, useState } from 'react'

export default function UseEffectApi() {
    const [value, setValue] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            const myData = data.slice(0, 5);
            setValue(myData)
            console.log(myData);
        }
        fetchData();
    }, [])
  return (
    <div>
      {value.map( item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

import React from 'react'
import UseContext from './UseContext';

export default function UseState(props) {
    const money = 10000;
  return (
    <div>
      <UseContext.Provider value = {{money}}>
        {props.children}
      </UseContext.Provider>
    </div>
  )
}

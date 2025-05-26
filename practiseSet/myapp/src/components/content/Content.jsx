import React, { useContext } from 'react'
// import UseState from '../useContext/UseState'
import UseContext from '../useContext/UseContext';

export default function Content() {
    const {money} = useContext(UseContext);

    console.log(useContext(UseContext));

  return (
    <div>
      <p>My Money {money}</p>
    </div>
  )
}

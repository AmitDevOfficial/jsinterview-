import React, { memo } from 'react'

const Child = (props) => {
    console.log("Hey i am Child Render");

  return (
    <div>
      <button onClick={props.func}>{props.btn}</button>
    </div>
  )
}

export default memo(Child)

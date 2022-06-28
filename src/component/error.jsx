import React from 'react'

const Error = (props) => {
  return (
    <div style={{'color':'red'}}>
      {props.count<25?props.error:"count is greater then 25"}
     
    </div>
  )
}

export default Error

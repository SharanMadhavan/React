import React from 'react'
import B from './B'
import myContext from './Context'

function A() {
  return (
    <div style={{padding:"10px"}}>
        <h3>A Component</h3>
        <hr></hr>
        <myContext.Provider value={"welcome to context api"}>
                 <B />
        </myContext.Provider>
   
    </div>

  )
}

export default A
import React from 'react'
import { useContext } from 'react'
import myContext from './Context'

function E() {
    let contextData = useContext(myContext);
  return (
    <div>
        <p> here showing the value came from the parent A component to E component
            with the help of the ContxtAPI
        </p>
        <h3 style={{color:"green"}}>E Component Context value : {myContext}</h3>
        <hr></hr>

    </div>
  )
}

export default E
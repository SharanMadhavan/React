import React, { useContext } from 'react'
import { myHomeContext } from './ContextService';

function ContextChildHome() {
     let data = useContext(myHomeContext);
  return (
    <div>
        <h4>Your Name is: <span style={{color:"green"}}> {data} </span> </h4> &nbsp; 

    </div>
  )
}

export default ContextChildHome
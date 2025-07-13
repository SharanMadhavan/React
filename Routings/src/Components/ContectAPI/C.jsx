import React from 'react'
import D from './D'
import myContext from './Context'
import { useContext } from 'react'
function C() {
   let data = useContext(myContext);
  return (
    <div>
        <h3 style={{color:"red"}}>C Component<br></br>
      
        ContextAPI provider Component having value : {data}</h3>
        <hr></hr>
        <D/>
    </div>
  )
}

export default C
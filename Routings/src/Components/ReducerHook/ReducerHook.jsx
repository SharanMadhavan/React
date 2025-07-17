import React, { useReducer, useRef } from 'react'
import Counterfunction from './Counterfuction';
 
function ReducerHook() {
  let [countValue,dispatch] = useReducer(Counterfunction,{count:10});
  let refVariable1 = useRef(null);
   let refVariable2 = useRef(null);
    let refVariable3 = useRef(null);

  const incCount = () =>{
      dispatch({type:"INC"})
      refVariable1.current.style.boxShadow="0 0 10px Green";
    
  }
  const decCount = () =>{
    dispatch({type:"DEC"})
    refVariable2.current.style.boxShadow="0 0 10px Green";
    refVariable1.current.style='';
  }
  const resetCount = ()=>{
    dispatch({type:"Reset"});
    refVariable3.current.style.boxShadow="0 0 10px green";
     refVariable1.current.style='';
      refVariable2.current.style='';
  }
  return (
    <div style={{padding:'50px',boxShadow:'0 0 10px grey',margin:'50px 200px',textAlign:'center'}}>
        <h2 >my value from the reuceHook:{ countValue.count}</h2>
        <button ref={refVariable1} onClick={incCount}>IncCount</button>
         <button ref={refVariable2} onClick={decCount}>decCount</button>
          <button ref={refVariable3} onClick={resetCount}>reset</button>
    </div>
  )
}

export default ReducerHook
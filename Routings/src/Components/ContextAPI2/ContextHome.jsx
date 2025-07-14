import React, { useState } from 'react'
import ContextChildHome from './ContextChildHome'
import { myHomeContext } from './ContextService';
import HeaderComponent from '../HeaderComponent';

function ContextHome() {

    // the form value we have to store inthe state so...
         let [state,setState] = useState();
         let[data,setData] = useState();
    
         // when ever we click the button we have to set our (state variable data into the data variable
         const formResult = () =>{
             setData(state);
           
         }

  return (
    <div>
        <h2>Parent Context form</h2>
        <div> 
            <label style={{color:"grey"}}>Name:</label> &nbsp;
            <input type='text' id="name" name="name" onChange={(event)=>{
                setState(event.target.value); }}>
                </input> &nbsp;           
            <button type='submit' onClick={formResult}>Submit</button>
            <hr></hr>
            <myHomeContext.Provider value={data} >
                          < ContextChildHome/>
                          
            </myHomeContext.Provider>
          
        </div>
    </div>
  )
}

export default ContextHome
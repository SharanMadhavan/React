import React, { useState } from 'react'
import FormDetails from './FormDetails'
import '../style/Form.css'
import { formPageActionCreator } from '../ActionCreator/formPageActionCreator';
import { useDispatch } from 'react-redux';
function FormPage() {
     let [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        college:'',
        education:''
     });
 let dispatch = useDispatch();

const onchageTriggred = (event)=>{
    setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
    }));  
}



    const FormData = () => {
            let action = formPageActionCreator(formData);
            dispatch(action);
        }
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Student Form</h2>
        <div className='form-container'>
            
            <label>FirstName</label>
            <input type='text' id='fname' name='firstName' required onChange={onchageTriggred}></input> 
            <label>LastName</label>
            <input type='text' id='lname' name='lastName' onChange={onchageTriggred}></input>
             <label>Email</label>
            <input type='text' id='email' name='email' onChange={onchageTriggred}></input>
             <label>College</label>
            <input type='text' id='college' name='college' onChange={onchageTriggred}></input>
             <label>Education</label>
            <input type='text' id='education' name='education' onChange={onchageTriggred}></input>

            <button onClick={FormData}>Submit</button>

        </div>
        <FormDetails />
        
    </div>
  )
}

export default FormPage
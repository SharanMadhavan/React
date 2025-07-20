import React from 'react'
import { useSelector } from 'react-redux'

function FormDetails() {
    let reduxFormData = useSelector((data)=>{
        return data.formPageReducerFn;
    });
  return (
    <div>
        <h3>
            Form Details
        </h3>
        <p>FirstName: {reduxFormData.firstName}</p>
        <p>LastName: {reduxFormData.lastName}</p>
        <p>Email: {reduxFormData.email}</p>
        <p>College: {reduxFormData.college}</p>
        <p>Eduction: {reduxFormData.education}</p>
    </div>
  )
}

export default FormDetails
import React, { useState } from 'react'
import '../style/city.css'
import CityDetails from './CityDetails'
import { cityActionCreator } from '../ActionCreator/cityAction';
import myreduxstore from '../Store/CreatorStore';
import { useDispatch } from 'react-redux';
function City() {
     let [city,setCity]= useState();
        let dispatch = useDispatch();

    const selectedCity =()=>{
           let action =  cityActionCreator(city);
          dispatch(action);
     }
  return (
    <div className='cities'>
        <h2>Cities Dropdown</h2>
        <select onChange={(event)=>{setCity(event.target.value)}}>
            <option>Hyderabad</option>
            <option>Telangana</option>
            <option>warngal</option>
            <option>goa</option>
            <option>maharastra</option>
        </select>&nbsp;&nbsp;
        <button onClick={selectedCity}>submit</button> <br></br>
        <div style={{marginTop:'20px',fontSize:'24px'}}>
        <CityDetails/>
        </div>
    </div>
  )
}

export default City
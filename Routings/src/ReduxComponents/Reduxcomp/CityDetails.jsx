import React from 'react'
import { useSelector } from 'react-redux'

function CityDetails() {
     let reduxStoreData = useSelector((storeData)=>{
        return storeData;
    })
  return (
    <div>CityDetails : {reduxStoreData.cityReducer}</div>
  )
}

export default CityDetails
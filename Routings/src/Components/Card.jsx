import React from 'react'
import './card/Card.css'

function Card({image,price,color}) {
  return (
    <div className='card'>
        <div className='container'>
            <img src={image} width={200} height={200} border={1} style={{marginTop:"5px",color:"pink"}}></img>
            <h4>Price: {price}</h4>
            <p>color: {color}</p>
            <button>click me</button>
        </div>
    </div>
  )
}

export default Card
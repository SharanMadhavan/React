import React, { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <div className='nav'>   
           <h2 style={{color:"wheat",fontSize:"25px"}} >welcome Sharan!</h2>

         <Link to={'/home'}>Home</Link>
       <Link to={'/contentype'} >ContentTypes</Link>
        <Link to={'/mobiles'}>Mobiles</Link>
        <Link to ={'/contextAPI'}>ContextAPI</Link>
         <Link to ={'/formContext'}>Home ContextAPI</Link>


        </div>
        </div>
  )
}

export default HeaderComponent
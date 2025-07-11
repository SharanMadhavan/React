import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <div>
      <div className='nav'>   
           <h2 >welcome </h2>

         <Link to={'/home'}>Home</Link>
       <Link to={'/contentype'} >ContentTypes</Link>
        <Link to={'/help'}>Help</Link>

        </div>
        </div>
  )
}

export default HeaderComponent
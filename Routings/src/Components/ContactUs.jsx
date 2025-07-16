import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './CSS/content.css'

function ContactUs() {
  return (
    <div >
        <h2>Content Types</h2>
        <div class='content'>
        <div className='links-container'>
          
        <Link to={'photo'} style={{textDecoration:'none',color:'rebeccapurple'}}>Photo</Link>
        <Link to={'video'} style={{textDecoration:'none'}}>Video</Link>
        <Link to={'audio'} style={{textDecoration:'none'}}>Audio</Link>
        <Link to={'stopwatch'} style={{textDecoration:'none'}}>Stop Watch</Link>
        </div> 
        <div className='componet-container'>
          <Outlet/>
        </div>
        </div>

    </div>
  )
}

export default ContactUs
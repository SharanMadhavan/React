import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reactimage from '/images/reactImage.svg'
import vueImage from '/images/vueimage.jpeg';

function Image() {
   let[show,setShow] = useState(reactimage);
   useEffect(()=>{
    console.log("use effects hook called")
    },[])
   let navigator = useNavigate();
  const TextComponent = ()=>{
        navigator("/text")
   }
  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{color:"red"}}>Image component</h2>
        <img src={show} width={300} height={200}></img>
     
        <br></br>  <br></br>
        <button onClick={()=>{setShow(vueImage)}}>Change Image</button> &nbsp;
        <button onClick={TextComponent}>Show Text</button>

    </div>
  )
}

export default Image
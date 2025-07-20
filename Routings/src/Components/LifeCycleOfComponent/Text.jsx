import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Text() {
   let[user,setUser] = useState();
  let navigator =   useNavigate();
   const    ShowImageComponent = ()=>{
            navigator('/lifecycle')
    }
    useEffect(()=>{
        getUser();
    },[])

    const getUser = async () =>{
          var response =  await fetch("https://jsonplaceholder.typicode.com/users")
          var data = await response.json();
          setUser(data)
    }

  return (
    <div>
        <h3 style={{color:'red'}}>Text  Component</h3>
        <p>This reducer updates the state only when action type is "FormData".It saves a partial object (firstName, lastName, email) from Formobject into the Redux store.You can use useSelector in any component to access this state and display the values.

</p>
{
    (user && user.length > 0) ? <ol>
        {
            user.map((ele)=>{
              return  <li>{ele.name},&nbsp;&nbsp;{ele.company.name}</li>
            })
        }
    </ol> : <h3>User Data not found</h3>
 }
<button onClick={ShowImageComponent}>Show ImageComponent</button>
    </div>
  )
}

export default Text
import React from 'react'
import { useNavigate } from "react-router-dom"
import "./Details.css"
function Details() {
    const history = useNavigate()
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }
  return (
    <div className='both'>
    <div className='both_button'>
      <button className='inside' onClick={userlogout}>Log Out</button>
    </div>
    <div>
    <img className='center' src='https://imgs.search.brave.com/_9-wICgfYRgXWM68BxzzGWDncZeOA_xEzlWWCPOXQd4/rs:fit:560:426:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvbmljZS10/aGF0LXlvdS1hcmUt/dGhlcmUtY2xpcGFy/dC02LmpwZw'/>
    </div>
  
</div>
  )
}

export default Details





















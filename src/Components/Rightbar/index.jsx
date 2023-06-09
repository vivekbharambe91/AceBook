import React from 'react'
import "./index.css"
import Gift from "../../Assets/images/gift.png"

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="birthday-notification flexcenter"> 
        <img src={Gift} alt="" className='birthday-image'/>
        <span><b>Anand Raj</b> and <b>3 other friends</b> have a birthday today.</span>
      </div>
    </div>
  )
}

export default Rightbar
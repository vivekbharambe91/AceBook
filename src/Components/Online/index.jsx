import React from 'react'
import "./index.css"

const Online = (props) => {
  return (
    <div className="online" >
    <li key={props.profilePic} className='cursor'>
    <div className="img-wrapper">
    <img className='friend-profile-picture' src={props.profilePic} alt=''/>
    </div>
    <span className='active-circle'></span>
    {props.friendName}
  </li>
  </div>
  )
}

export default Online
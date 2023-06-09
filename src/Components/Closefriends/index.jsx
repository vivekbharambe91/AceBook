import React from 'react'
import "./index.css"

const index = (props) => {
  return (
    <React.Fragment>
    <li key={props.profilePic}>
    <img className='friend-profile-picture' src={props.profilePic} alt=''/>
    {props.friendName}
  </li>
  </React.Fragment>
  )
}

export default index
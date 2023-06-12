import React from 'react'
import "./index.css"

const ProfilePicture = () => {
  return (
    <div className='profilepicture'>
        <div className="img-wrapper">
            <img src="https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg" alt="" />
        </div>
        <div className='profile-dp-img-wrapper'> 
        <img className='profile-dp' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80" alt="" />
        <h2>Arun Gupta</h2>
        <span>Hey I'm new to Acebook!!!</span>
        </div>
    </div>
  )
}

export default ProfilePicture
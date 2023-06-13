import React from 'react'
import "./index.css"

const ProfileRightBar = () => {
  return (
    <div className='profile-rightbar'>
    <div className="user-details">
        <h5>User Information</h5>
        <span className='user-info'>City:  <span className='user-info-details'>New York</span></span><br/>
        <span className='user-info'>From:  <span className='user-info-details'>Madrid</span></span><br/>
        <span className='user-info'>Relationship:  <span className='user-info-details'>Single</span></span><br/>
    </div>
    
    <div className="user-friends">
        <h5>Friends</h5>
        <div className="row pad">
        <div className="right-6 flexcenter">
            <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
            </div>
        </div>
        <div className="right-6 flexcenter">
            <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
            </div>
        </div>
        <div className="right-6 flexcenter">
        <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
        </div>
        </div>
        <div className="right-6 flexcenter">
            <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
            </div>
        </div>
        <div className="right-6 flexcenter">
        <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
        </div>
        </div>
        <div className="right-6 flexcenter">
        <div className="cursor">
            <img className='friend-img-wrapper' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <span className='friends-name'>Aryan Khan</span>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileRightBar
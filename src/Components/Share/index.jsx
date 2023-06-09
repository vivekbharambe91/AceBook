import React from 'react'
import "./index.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80" alt="" />
          <input placeholder="What's in your mind Arun?" alt='thought'/>
        </div>
        <hr/>
        <div className="shareButtom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMediaIcon htmlColor='tomato'/>
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor='blue'/>
              <span className="share-option-text">Tag</span>
            </div>
            <div className="shareoption">
              <RoomIcon htmlColor='green'/>
              <span className="share-option-text">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotionsIcon htmlColor='goldenrod'/>
              <span className="share-option-text">Feeling</span>
            </div>
            <button className='btn btn-sm btn-success share-button'>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./index.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const index = (props) => {
  return (
    <div className='post'>
        <div className="post-container">
            <div className="post-header">
            <div className="post-header-row">
            <img className='cursor' src={props.profilePicture} alt=""/>
            <div className="post-person-name cursor">
            {props?.profileName}
            </div>
            <span>5 mins ago</span>
            </div>
            <MoreVertIcon/>
            </div>
            <div className="post-status">
            {props.status}
            </div>
            <div className="post-picture">
                <img src={props.postPicture} alt="" />
            </div>
            <div className="post-enhancer-container flexalignbetween">
            <div className="post-enhancher">
            <div className="post-like">
            <ThumbUpIcon/>
            </div>
            <div className="post-react">
            <FavoriteBorderIcon/>
            </div>
            <div className="post-comment">
            <ChatBubbleIcon/>
            </div>
            <div className="post-share">
                <SendIcon/>
            </div>
            <span>32 people liked it</span>
            </div>
            <span className='cursor'>10 comments</span>
            </div>
            </div>   
    </div>
  )
}

export default index
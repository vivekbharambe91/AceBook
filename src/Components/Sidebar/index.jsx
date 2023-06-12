import {React,useEffect,useState} from 'react'
import "./index.css"
import { feed,friendList } from "./helper"
import Online from '../Online'

const Sidebar = () => {
  const [closeFriendsList,setCloseFriendsList] = useState([])

useEffect(()=>{
    closeFriendFunction()
},[])

function closeFriendFunction(){
  setCloseFriendsList(friendList?.filter(e=>e.close==="true"))
}

  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-ul">
          {feed?.map(e=>
          <li key={e.icon}>
            <e.icon/>
            {e.feedName}
          </li>
          )}
        </ul>
        <hr/>
        <span className='close-title'>Close friends</span>
        <ul className='friendlist'>
        {closeFriendsList?.map(e=>
         <Online
         profilePic={e.profilePic}
         friendName={e.friendName}
         />
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
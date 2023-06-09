import React from 'react'
import "./index.css"
import { feed,friendList } from "./helper"
import Closefriends from "../Closefriends/index"

const Sidebar = () => {
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
        {friendList?.map(e=>
         <Closefriends
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
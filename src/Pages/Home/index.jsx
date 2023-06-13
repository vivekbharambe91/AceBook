import React from 'react'
import "./index.css"
import Navbar from '../../Components/Navbar'
import Sidebar from "../../Components/Sidebar/index"
import Feed from '../../Components/Feed'
import Rightbar from '../../Components/Rightbar'

const Home = () => {
  return (
    <div className="row acebook-container">
    <Feed/>
    <Rightbar/>
    </div>
  )
}

export default Home
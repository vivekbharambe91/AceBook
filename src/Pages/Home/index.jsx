import React from 'react'
import "./index.css"
import Navbar from '../../Components/Navbar'
import Sidebar from "../../Components/Sidebar/index"
import Feed from '../../Components/Feed'
import Rightbar from '../../Components/Rightbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="acebook-container">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Home
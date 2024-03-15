import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import "./index.css"

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        {props?.component}
      </div>
    </React.Fragment>
  )
}

export default Layout
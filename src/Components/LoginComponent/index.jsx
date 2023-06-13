import React from 'react'
import "./index.css"
import Form from '../common/Form'

const LoginComponent = () => {
  return (
    <div className='logincomponent'>
        <div className="container flexcenter">
            <div className="col-md-6 brand">
                <h1>AceBook</h1>
                <p>Connect with friends and the world around you on AceBook.</p>
            </div>
            <div className="col-md-6">
            <Form/>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent
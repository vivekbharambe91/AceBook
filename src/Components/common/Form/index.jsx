import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./index.css"
import { message } from 'antd';
import { useSelector } from "react-redux"

const Form = () => {
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const Navigate = useNavigate()
  const login = useSelector(state=>state.user)

  function handleLogin(e){
    e.preventDefault()
    const validate = login.find(user=>email===user.email&&password===user.password)
    if(validate){
      Navigate("/")
      message.success("Logged in successfully")
    }
    else{
      message.error("Password mismatched!!")
    }
  }

  return (
    <form className='common-form' onSubmit={(e)=>handleLogin(e)}>
    <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input onChange={e=>setEmail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter you email or phone number"/>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input onChange={e=>setPassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password"/>
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    <div className='col textcenter'>
      <div className="form-group">
    <span>Forgot Password?</span>
    </div>
    <div className="form-group">
    <button className='btn btnsuccess'>Create a New Account</button>
    </div>
    </div>
    </form>
  )
}

export default Form
import React, { useState } from 'react'
import './Login_file.css'
import login from './login.module.css'
import { useNavigate } from 'react-router-dom'


const apiUrl = "http://localhost:4000/auth/login"

const Login_file = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginhandler = async(e) => {
    e.preventDefault();
    const logindetails = {
        username,
        password
      }
    try{
      const response = await fetch(apiUrl,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(logindetails),
        credentials:'include'
      })
      if(response.ok){
        alert("Login Successfull!")
        navigate("/")
      }else{
        alert("Login Failed!!")
      }

    }catch(err){
      console.log(err)
    }
  } 

  return (
    <div className={login.container}>
      <h1 className={login.headingEle}>Authentication</h1>
      <form onSubmit={loginhandler}>
        <div className="username-container">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" className="username-input" />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="password-input" />
        </div>
        <div className="options-container">
          <div className="checkbox-container">
            <input type="checkbox" id="remember" className="checkbox-input" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot-container">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  )
}

export default Login_file

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const apiurl = "http://localhost:4000/auth/register";

const Register_file = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate();


  const registerhandler = async(e) =>{
    e.preventDefault();
    const registerdata = {
      username,
      password,
      email,
      phone
    }
    console.log(registerdata);
    try{
      const response = await fetch(apiurl,{
        method:'POST',
        headers:{
          "Content-Type":'application/json',
        },
        body:JSON.stringify(registerdata),
        credentials:'include'
      })
      if(response.ok){
        alert("Registration successfull!");
        navigate('/login');

      }else{
        alert("Registration failed!");
      }
    }catch(error){
        console.log(error);
    }
  }

  return (
    <div className="background-container">
      <h1 className="headingEle">Authentication</h1>
      <form onSubmit={registerhandler}>
        <div className="username-container">
          <label htmlFor="username">Username</label>
          <input type="text"  className="username-input" 
            name='username' onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password-input" 
          name="password" onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="email-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" className="email-input" 
          name="email" onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="phone-container">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" className="phone-input" 
          name="phone" onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="options-container">
          <div className="checkbox-container">
            <input type="checkbox" id="remember" className="checkbox-input"/>
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot-container">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  )
}

export default Register_file

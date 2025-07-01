import React, { useState } from 'react'
import login from './login.module.css'
import { useNavigate } from 'react-router-dom'

const apiUrl = "http://localhost:4000/auth/login"

const Login_file = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginhandler = async (e) => {
    e.preventDefault();
    const logindetails = {
      username,
      password
    }
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindetails),
        credentials: 'include'
      })
      if (response.ok) {
        alert("Login Successfull!")
        navigate("/dashboard")
      } else {
        alert("Login Failed!!")
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={login.Container}>
      <h1 className={login.HeadingEle}>Authentication</h1>
      <form onSubmit={loginhandler}>
        <div className={login.UsernameContainer}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className={login.UsernameInput}
          />
        </div>
        <div className={login.PasswordContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className={login.PasswordInput}
          />
        </div>
        <div className={login.OptionsContainer}>
          <div className={login.CheckboxContainer}>
            <input
              type="checkbox"
              id="remember"
              className={login.CheckboxInput}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={login.ForgotContainer}>
            <a href="#" className={login.ForgotLink}>Forgot password?</a>
          </div>
        </div>
        <button type="submit" className={login.SubmitBtn}>Login</button>
      </form>
    </div>
  )
}

export default Login_file

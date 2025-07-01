import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from './register.module.css';

const apiurl = "http://localhost:4000/auth/register";

const Register_file = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const registerhandler = async (e) => {
    e.preventDefault();
    const registerdata = {
      username,
      password,
      email,
      phone
    };
    console.log(registerdata);
    try {
      const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(registerdata),
        credentials: 'include'
      });
      if (response.ok) {
        alert("Registration successfull!");
        navigate('/login');
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={register.backgroundContainer}>
      <h1 className={register.headingEle}>Authentication</h1>
      <form className={register.form} onSubmit={registerhandler}>
        <div className={register.usernameContainer}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={register.usernameInput}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={register.passwordContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={register.passwordInput}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={register.emailContainer}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={register.emailInput}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={register.phoneContainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={register.phoneInput}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={register.optionsContainer}>
          <div className={register.checkboxContainer}>
            <input type="checkbox" id="remember" className={register.checkboxInput} />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={register.forgotContainer}>
            <a href="#" className={register.forgotLink}>Forgot password?</a>
          </div>
        </div>
        <button type="submit" className={register.submitBtn}>Register</button>
        <div className={register.loginContainer}>
          <span>Already have an account?</span>
          <button
            type="button"
            className={register.loginLink}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register_file;
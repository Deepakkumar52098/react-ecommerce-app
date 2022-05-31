import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='r-container'>
      <div className='r-wrapper'>
        <h1 className='r-title'>CREATE AN ACCOUNT</h1>
        <form className='r-form'>
          <input className='r-input' placeholder="name" />
          <input className='r-input' placeholder="last name" />
          <input className='r-input' placeholder="username" />
          <input className='r-input' placeholder="email" />
          <input className='r-input' placeholder="password" />
          <input className='r-input' placeholder="confirm password" />
          <span className='r-agreement'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='r-button'>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='l-container'>
      <div className='l-wrapper'>
        <h1 className='l-title'>SIGN IN</h1>
        <form className='l-form'>
          <input className='l-input' placeholder="username" />
          <input className='l-input' placeholder="password" />
          <button className='l-button'>LOGIN</button>
          {/* <a className='l-link' href='#'>DO YOU NOT REMEMBER THE PASSWORD?</a> */}
          {/* <a className='l-link' href='#'>CREATE A NEW ACCOUNT</a> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
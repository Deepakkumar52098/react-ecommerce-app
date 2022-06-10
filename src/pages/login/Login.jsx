
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../api/api';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {loading,error} = useSelector(state=> state.user)

  const handleOnClick = (e) => {
    e.preventDefault()
    api.login(dispatch, { email, password })
  }
  return (
    <div className='l-container'>
      <div className='l-wrapper'>
        <h1 className='l-title'>SIGN IN</h1>
        <form className='l-form'>
          <input
            className='l-input'
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)} />
          <input
            className='l-input'
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <button
            className={loading ?'l-button-disabled' : 'l-button'}
            disabled={loading}
            onClick={handleOnClick}>LOGIN</button>
          {/* <a className='l-link' href='#'>DO YOU NOT REMEMBER THE PASSWORD?</a> */}
          {/* <a className='l-link' href='#'>CREATE A NEW ACCOUNT</a> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
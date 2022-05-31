import React from 'react'
import './newsletter.css'
import { MdSend } from "react-icons/md";


const Newsletter = () => {
  return (
      <div className="n-container">
          <h1 className="n-title">Newsletter</h1>
          <div className="n-description">
              Get timely updates from your favourite products.
          </div>
          <div className="n-inputContainer">
              <input className="n-input" type="text" placeholder='Your email'/>
              <button className="n-button">
                  <MdSend size="1.3em"/>
              </button>
          </div>
      </div>
    )
}

export default Newsletter
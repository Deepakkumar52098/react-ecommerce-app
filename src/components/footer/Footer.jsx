import React from 'react'
import './footer.css'
import { MdEmail, MdFacebook, MdLocalPhone } from "react-icons/md";
import { RiInstagramFill, RiMapPin2Fill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="f-container">
            <div className="f-left">
                <h1 className="f-logo">D-Kart!</h1>
                <p className="f-description">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="f-socialContainer">
                    <div className="f-socialIcon" style={{ color: "#3B5999" }}>
                        <MdFacebook size="1.3em" />
                    </div>
                    <div className="f-socialIcon" style={{ color: "#E4405F" }}>
                        <RiInstagramFill size="1.3em" />
                    </div>
                    <div className="f-socialIcon" style={{ color: "#55ACEE" }}>
                        <RiTwitterFill size="1.3em" />
                    </div>
                </div>
            </div>
            <div className="f-center">
                <h3 className='f-title'>Useful Links</h3>
                <ul className='f-list'>
                    <li className='f-listItem'>Home</li>
                    <li className='f-listItem'>Cart</li>
                    <li className='f-listItem'>Man Fashion</li>
                    <li className='f-listItem'>Woman Fashion</li>
                    <li className='f-listItem'>Accessories</li>
                    <li className='f-listItem'>My Account</li>
                    <li className='f-listItem'>Order Tracking</li>
                    <li className='f-listItem'>Wishlist</li>
                    <li className='f-listItem'>Terms</li>
                </ul>
            </div>
            <div className="f-right">
                <h3 className='f-title'>Contact Us</h3>
                <div className="f-contactItem">
                    <RiMapPin2Fill style={{ marginRight: "10px" }} size="1.3em" /> 1/61A,XYZ Avenue, ABCDEF, 641689
                </div>
                <div className="f-contactItem">
                    <MdLocalPhone style={{ marginRight: "10px" }} size="1.3em" /> +91 9786534210
                </div>
                <div className="f-contactItem">
                    <MdEmail style={{ marginRight: "10px" }} size="1.3em" /> xyz@dkart.dev
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className='f-payment' alt="" />
            </div>
        </div>
    )
}

export default Footer
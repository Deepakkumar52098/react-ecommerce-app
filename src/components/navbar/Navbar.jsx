import React from "react"
import './navbar.css'
import { MdSearch, MdShoppingCart } from "react-icons/md";


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='wrapper'>
                <div className='nav-left'>
                    <span className='language'>EN</span>
                    <div className="nav-search">
                        <input className="nav-input"></input>
                        <MdSearch className="nav-search-icon" size="1.3em" />
                    </div>
                </div>
                <div className='nav-center'>
                    <h1 className="nav-logo">D-Kart!</h1>
                </div>
                <div className='nav-right'>
                    <div className="right-menu">REGISTER</div>
                    <div className="right-menu">LOGIN</div>
                    <div className="right-menu">
                        <MdShoppingCart className="kart-icon" size="1.7em" />
                        <span className='badge lblCartCount'> 5 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
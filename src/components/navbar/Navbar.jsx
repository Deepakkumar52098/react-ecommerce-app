import React from "react"
import './navbar.css'
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
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
                    <Link to="/cart">
                        <div className="right-menu">
                            <MdShoppingCart className="kart-icon" size="1.7em" />
                            <span className='badge lblCartCount'> {quantity} </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
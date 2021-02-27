import React from 'react';
import './navbar.css';
import logo from '../img/logo.png'

const Navbar = ({ updateLoggedInStatus }) => {
    
    const handleSignOut = () => {
        updateLoggedInStatus(false)
    }

    return (
        <nav className="navbar-item">
            <h1 className="navbar-logo">
            <img src={logo}  alt="logo"  />
            </h1>
            <div className="menu-icon">
            <ul>
                <ol><a href="#" onClick={handleSignOut}>SignOut</a></ol>
            </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;
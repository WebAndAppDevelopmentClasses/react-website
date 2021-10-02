import React from 'react'
import './css/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <header className="header">
                <nav className="navbar" id="navbar">
                    <a href="/" className="nav-logo">Web And App Development Classes</a>
                    <ul className="nav-menu">
                        <Link to='/'>
                            <li className="nav-item nav-link">Home</li>
                        </Link>
                        <Link to='/about'>
                        <li className="nav-item nav-link">About</li>
                        </Link>
                        <Link to='/services'>
                        <li className="nav-item nav-link">Services</li>
                        </Link>
                        <li className="nav-item">
                            <a href="https://www.youtube.com/channel/UCAp1VvnTMHTGmNTf-lrBqmg" target="_webandapp" className="nav-link">Visit Channel</a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar

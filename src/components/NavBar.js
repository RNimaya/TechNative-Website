import React from 'react';
import '../styles.css'; 
import logo from '../assets/LOGO.jpeg';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <React.Fragment>
        <header className="NavBar">
            <div className="logo">
                <img src="/LOGO.jpeg" alt="TechNative Logo"/> 
            </div>
            <nav>
                <ul>
                    <li><Link to='/home'><a href="#home">Home</a></Link></li>
                    <li><Link to='/aboutUs'><a href="#aboytUs">AboutUs</a></Link></li>
                    <li><Link to='/services'><a href="#home">Services</a></Link></li>
                    <li><Link to='/portfolio'><a href="#aboytUs">Portfolio</a></Link></li>
                    <li><Link to='/contact'><a href="#home">Contact</a></Link></li>
                </ul>
            </nav>

            <button className="ct-button">
                <a href="#contact">Get in Touch</a>
            </button>

        </header>
        </React.Fragment>
    );
};

export default NavBar;

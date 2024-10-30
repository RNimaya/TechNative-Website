import React from 'react';
import '../styles.css'; 
import logo from '../assets/LOGO.jpeg';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ServicesPage from '../components/ServicesPage';


const NavBar = () => {
    return (
        <React.Fragment>
        <header className="NavBar">
            <div className="logo">
                <img src="/LOGO.jpeg" alt="TechNative Logo"/> 
            </div>
            <nav>
                <ul>
                    <li><a href=".Home">Home</a></li>
                    <li><a href="#AboutUs">AboutUs</a></li>                
                    <li><a href=".ServicesPage">Services</a></li>
                    <li><Link to='/portfolio'><a href="#jj">Portfolio</a></Link></li>
                    <li><Link to='/contact'><a href="#hme">Contact</a></Link></li>
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

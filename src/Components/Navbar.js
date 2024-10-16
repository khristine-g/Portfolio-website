// src/Components/Navbar.js
import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaEnvelope } from 'react-icons/fa';
import '../Navbar.css';

const Navbar = () => {
    return (
        <aside className="side-navbar">
            <h1>My Portfolio</h1>
            <nav>
                <a href="#home" className="nav-item">
                    <FaHome className="nav-icon" />
                    <span className="nav-text">Home</span>
                </a>
                <a href="#about" className="nav-item">
                    <FaUser className="nav-icon" />
                    <span className="nav-text">About</span>
                </a>
                <a href="#projects" className="nav-item">
                    <FaProjectDiagram className="nav-icon" />
                    <span className="nav-text">Projects</span>
                </a>
                <a href="#skills" className="nav-item">
                    <FaCode className="nav-icon" />
                    <span className="nav-text">Skills</span>
                </a>
                <a href="#contact" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span className="nav-text">Contact</span>
                </a>
            </nav>
        </aside>
    );
};

export default Navbar;



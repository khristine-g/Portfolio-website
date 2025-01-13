import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import "../Navbar.css";

const Navbar = () => {
    return (
        <aside className="top-navbar">
            <h1 className="logo">
                <FaCodeBranch className="logo-icon" /> Khristine
            </h1>
            <nav className="nav-links">
                <a href="#home" className="nav-item">
                    <span className="nav-text">Home</span>
                </a>
                <a href="#about" className="nav-item">
                    <span className="nav-text">About</span>
                </a>
                <a href="#projects" className="nav-item">
                    <span className="nav-text">Projects</span>
                </a>
                <a href="#skills" className="nav-item">
                    <span className="nav-text">Skills</span>
                </a>
                <a href="#contact" className="nav-item">
                    <span className="nav-text">Contact</span>
                </a>
            </nav>
        </aside>
    );
};

export default Navbar;

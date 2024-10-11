// src/components/Header.js
import React from 'react';
import '../Header.css';

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;

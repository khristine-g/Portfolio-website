import React, { useState } from "react";
import { FaCodeBranch, FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <aside className="top-navbar">
      <h1 className="logo">
        <FaCodeBranch className="logo-icon" /> Khristine
      </h1>

      {/* Mobile Side Menu */}
      <div className={`side-menu ${isSideMenuOpen ? "open" : ""}`}>
        <div className="side-menu-content">
          <a href="#home" className="nav-item" onClick={closeSideMenu}>
            <span className="nav-text">Home</span>
          </a>
          <a href="#about" className="nav-item" onClick={closeSideMenu}>
            <span className="nav-text">About</span>
          </a>
          <a href="#projects" className="nav-item" onClick={closeSideMenu}>
            <span className="nav-text">Projects</span>
          </a>
          <a href="#skills" className="nav-item" onClick={closeSideMenu}>
            <span className="nav-text">Skills</span>
          </a>
          <a href="#contact" className="nav-item" onClick={closeSideMenu}>
            <span className="nav-text">Contact</span>
          </a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleSideMenu}>
        {isSideMenuOpen ? <FaTimes className="close-icon" /> : <FaBars className="open-icon" />}
      </div>
      
      {/* Regular Navigation Links for Desktop */}
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


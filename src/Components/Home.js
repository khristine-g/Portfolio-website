// src/components/Home.js
import React from 'react';
import '../Home.css';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import khristineImage from '../images/khristine.jpeg';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons


const Home = () => {
    return (
        <section id="home">
        <div className="home-container">
            
            <div className="image-section">
            <img  className="home-image"src={khristineImage} alt="Khristine" />
            <div className="home-social-icons">
                <a  className="social-link"href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a className="social-link"href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a className="social-link" href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className="social-link"href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            </div>
            <div className="text-section">
                <h1 className='developer-name'> I'M KHRISTINE GITHIGE.</h1>
                <h2 className='developer-title'>SOFTWARE DEVELOPER</h2>
                <p>
                    I'm a full stack web developer focused on crafting clean & user-friendly experiences. 
                    I am passionate about building excellent software that improves the lives of those around me.
                </p>
                <a href="/path/to/cv.pdf" download className="download-cv-btn">Download CV</a>
                <a href="/path/to/cv.pdf" download className="contact-btn">Contact</a>

            </div>
            
        </div>
        <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </section>
        
    );
};

export default Home;

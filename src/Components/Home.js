import React from 'react';
import '../Home.css';
import khristineImage from '../images/khristine.jpeg';

const Home = () => {
    return (
        <section id="home"  className="animate-on-scroll">
            <div className="home-container">
            <div className="home-circles"></div> {/* Decorative circles */}
                <div className="text-section">
                    <h1 className="developer-name">Hi, I'm Khristine</h1>
                    <h2 className="developer-title">Software Developer</h2>
                    <p className="developer-description">
                        Crafting intuitive and user-friendly web applications. I am passionate about technology, problem-solving, and creating impactful digital experiences.
                    </p>
                    <div className="buttons">
                        <a href="/path/to/cv.pdf" download className="download-cv-btn">Download CV</a>
                        <a href="/contact" className="contact-btn">Contact</a>
                    </div>
                 
                </div>
                <div className="divider-line"></div>
                <div className="image-section">
                    <img className="home-image" src={khristineImage} alt="Khristine" />
                </div>
            </div>
        </section>
    );
};

export default Home;


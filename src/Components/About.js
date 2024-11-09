import React from 'react';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import '../About.css'; // Import the general styles for About component

const About = () => {
    return (
        <section id="about">
            <section className="about-section">
                <h2>About Me</h2>
                
                <Education />
                <Experience />
            </section>
        </section>
    );
};

export default About;


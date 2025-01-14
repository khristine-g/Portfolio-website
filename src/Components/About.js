import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import '../About.css';

const About = () => {
    return (
        <section id="about" className="animate-on-scroll" >
            <div className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="education-experience">
                    <div className="section">
                        <h3><FaGraduationCap className="icon" /> Education</h3>
                        <div className="item" >
                            <span>2015 - 2022</span>
                            <h4>Bsc Information Technology ,Jomo Kenyatta  University of Agriculture and Technology</h4>
                        </div>
                        <div className="item" >
                            <span>Feb 2023- August 2023</span>
                            <h4>Software engineering, Moringa School</h4>
                        </div>
                    </div>
                    <div className="section">
                        <h3><FaBriefcase className="icon" /> Experience</h3>
                        <div className="item" >
                            <span>2018 - Present</span>
                            <h4>Founder,True Beauty</h4>
                        </div>
                        <div className="item" >
                            <span>2022</span>
                            <h4>Intern,Ministry of Public Service ,Performance and Delivery Management </h4>
                        </div>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    );
};

export default About;


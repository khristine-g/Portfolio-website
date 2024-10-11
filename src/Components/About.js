// src/components/About.js
import React from 'react';
import '../About.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <p>I'm a passionate software developer with experience in building web applications using React, Node.js, and other modern technologies.</p>
            
            <div className="experience-education">
                <div className="experience">
                    <h3><FaBriefcase className="icon" /> Experience</h3>
                    <ul>
                        <li>
                            <span>2018 - Present</span>
                            <h4>Web Developer Envato</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.</p>
                        </li>
                        <li>
                            <span>2013 - 2018</span>
                            <h4>UI/UX Designer Themeforest</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.</p>
                        </li>
                        <li>
                            <span>2013 - 2018</span>
                            <h4>Consultant Videohive</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.</p>
                        </li>
                    </ul>
                </div>

                <div className="education">
                    <h3><FaGraduationCap className="icon" /> Education</h3>
                    <ul>
                        <li>
                            <span>2018 - Present</span>
                            <h4>Engineering Degree Oxford University</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.</p>
                        </li>
                        <li>
                            <span>2013 - 2018</span>
                            <h4>Master Degree Kiev University</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut adipisicing.</p>
                        </li>
                        <li>
                            <span>2009</span>
                            <h4>Bachelor Degree Tunis High School</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;

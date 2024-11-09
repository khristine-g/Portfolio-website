import React from 'react';
import '../Skills.css';
import khristineImage from '../images/portfolio2.jpg';
import { FaJs, FaReact,  FaCss3Alt, FaPython, FaHtml5 } from 'react-icons/fa'; // Sample icons


const skills = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
  
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <FaHtml5 /> }
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="line-with-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <hr className="top-line" />
            </div>

            <section className="hire-me-container">
                <div className="skill-image-section">
                    <img src={khristineImage} alt="Khristine" />
                </div>
                <div className="hire-me-section">
                    <h3>Why Hire Me For Your Next Project?</h3>
                    <p>
                        I’m highly proficient and well-versed with various programming languages, such as JavaScript, React, and other basic Front-End frameworks.
                        I also use Ruby on Rails and Django for backend development.
                    </p>
                    <p>
                        Additionally, I have worked and interacted with tools such as Figma, making me a skilled UI/UX designer.
                    </p>
                </div>
            </section>

            <h2 className="skills-title">My Skills</h2>
            <div className="skills-carousel">
                <div className="carousel-track">
                    {skills.map((skill, index) => (
                        <div key={index} className="carousel-item">
                            <div className="icon">{skill.icon}</div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

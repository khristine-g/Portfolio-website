import React from 'react';
import '../Skills.css';
import { FaJs, FaReact, FaCss3Alt, FaPython, FaHtml5 } from 'react-icons/fa';
import { DiBootstrap, DiDjango, DiRuby, DiGithubBadge, DiGit } from 'react-icons/di';
import { MdApi } from 'react-icons/md'; // Icon for API Development
import { FaLaptopCode } from 'react-icons/fa'; // Icon for Full Stack Development


const skills = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'Bootstrap', icon: <DiBootstrap /> },
    { name: 'Django', icon: <DiDjango /> },
    { name: 'Ruby on Rails', icon: <DiRuby /> },
    { name: 'Git', icon: <DiGit /> },
    { name: 'GitHub', icon: <DiGithubBadge /> },
    { name: 'API Development (REST)', icon: <MdApi /> }, // New Skill
    { name: 'Full Stack Development', icon: <FaLaptopCode /> } // New Skill
];

const Skills = () => {

   
    return (
        <section id="skills" className="animate-on-scroll">
            <div className="line-with-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <hr className="top-line" />
            </div>
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="icon">{skill.icon}</div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="hire-me-section">
                    <div className="hire-me-text">
                        <h3>Why Hire Me For Your Next Project?</h3>
                        <p>
                        I bring a strong foundation in front-end development with expertise in JavaScript, React, and other modern frameworks to create intuitive and engaging user interfaces. On the backend, I leverage Ruby on Rails and Django to build robust, scalable, and secure applications. 
                           
                        </p>
                        <p>
                        My ability to seamlessly integrate front-end and back-end technologies ensures a cohesive and efficient development process. With a passion for problem-solving and delivering high-quality solutions, I’m dedicated to helping your projects succeed.
                           
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;


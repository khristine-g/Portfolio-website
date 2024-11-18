import React from 'react';
import '../Skills.css';
// import khristineImage from '../images/portfolio2.jpg';
import { FaJs, FaReact, FaCss3Alt, FaPython, FaHtml5 } from 'react-icons/fa';
import { DiBootstrap, DiDjango, DiRuby, DiGithubBadge, DiGit } from 'react-icons/di';

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
    { name: 'GitHub', icon: <DiGithubBadge /> }
];

const Skills = () => {
    return (
        <section id="skills">
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
                    {/* <div className="skill-image-section">
                        <img src={khristineImage} alt="Khristine" />
                    </div> */}
                    <div className="hire-me-text">
                        <h3>Why Hire Me For Your Next Project?</h3>
                        <p>
                            I’m highly proficient and well-versed with various programming languages, such as JavaScript, React, and other basic Front-End frameworks.
                            I also use Ruby on Rails and Django for backend development.
                        </p>
                        <p>
                            Additionally, I have worked and interacted with tools such as Figma, making me a skilled UI/UX designer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;




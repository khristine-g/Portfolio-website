// src/components/Skills.js
import React, { useEffect, useRef } from 'react';
import '../Skills.css';

const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Ruby', percentage: 80 },
    { name: 'CSS', percentage: 75 },
    { name: 'Rails', percentage: 95 },
    { name: 'Python', percentage: 95 },
    { name: 'Django', percentage: 95 },
    { name: 'HTML', percentage: 95 }
];

const Skills = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.classList.add('animate-title');
        }
    }, []);

    return (
        <section className="skills-section">
            <h2 className='skills-title' ref={titleRef}>My Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="circle">
                            <svg>
                                <circle cx="50" cy="50" r="45"></circle>
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    style={{ strokeDashoffset: `calc(282 - (282 * ${skill.percentage}) / 100)` }}
                                ></circle>
                            </svg>
                            <div className="percentage">
                                <h3>{skill.percentage}%</h3>
                            </div>
                        </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

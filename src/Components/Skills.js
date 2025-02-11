import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../Skills.css';
import { FaJs, FaReact, FaCss3Alt, FaPython, FaHtml5, FaLaptopCode } from 'react-icons/fa';
import { DiBootstrap, DiDjango, DiRuby, DiGithubBadge, DiGit } from 'react-icons/di';
import { MdApi } from 'react-icons/md';

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
    { name: 'API Development (REST)', icon: <MdApi /> },
    { name: 'Full Stack Development', icon: <FaLaptopCode /> }
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("skills");
            if (section) {
                const top = section.getBoundingClientRect().top;
                setIsVisible(top < window.innerHeight - 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" className="animate-on-scroll">
            <div className="line-with-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <hr className="top-line" />
            </div>
            <motion.h2 
                className="skills-title"
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }} 
                transition={{ duration: 0.8 }}
            >
                MY SKILLS
            </motion.h2>
            
            <div className="skills-container">
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="skill-item"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <div className="icon">{skill.icon}</div>
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="hire-me-section"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hire-me-text">
                        <h3>Why Hire Me For Your Next Project?</h3>
                        <p>
                            I bring a strong foundation in front-end development with expertise in JavaScript, React, and other modern frameworks to create intuitive and engaging user interfaces.
                        </p>
                        <p>
                            My ability to seamlessly integrate front-end and back-end technologies ensures a cohesive and efficient development process. With a passion for problem-solving and delivering high-quality solutions, I’m dedicated to helping your projects succeed.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

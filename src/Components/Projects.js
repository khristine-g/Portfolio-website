// src/components/Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Projects.css';
import projectOneImage from '../images/portfolio9.jpg';
import projectTwoImage from '../images/portfolio9.jpg';
import projectThreeImage from '../images/portfolio9.jpg';
import projectFourImage from '../images/portfolio9.jpg';

const projects = [
    {
        title: 'Project One',
        description: 'A web application that allows users to manage their tasks effectively.',
        link: 'https://github.com/yourusername/project-one',
        image: projectOneImage,
    },
    {
        title: 'Project Two',
        description: 'An e-commerce platform built with React and Node.js.',
        link: 'https://github.com/yourusername/project-two',
        image: projectTwoImage,
    },
    {
        title: 'Project Three',
        description: 'A mobile app built with React Native and Firebase.',
        link: 'https://github.com/yourusername/project-three',
        image: projectThreeImage,
    },
    {
        title: 'Project Four',
        description: 'A portfolio website built with Gatsby and GraphQL.',
        link: 'https://github.com/yourusername/project-four',
        image: projectFourImage,
    },
];

const Projects = () => {
    const navigate = useNavigate();

    // Function to navigate to the full project page
    const handleViewAll = () => {
        navigate('/all-projects');
    };

    return (
        <section id="projects">
            <section className="projects-section">
                <h2>My Projects</h2>
                <ul className="projects-list">
                    {projects.slice(0, 2).map((project, index) => (
                        <li key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={handleViewAll} className="view-all-button">View All Projects</button>
            </section>
        </section>
    );
};

export default Projects;


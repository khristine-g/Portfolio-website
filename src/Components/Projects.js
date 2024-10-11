// src/components/Projects.js
import React from 'react';
import '../Projects.css';

const projects = [
    {
        title: 'Project One',
        description: 'A web application that allows users to manage their tasks effectively.',
        link: 'https://github.com/yourusername/project-one',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        title: 'Project Two',
        description: 'An e-commerce platform built with React and Node.js.',
        link: 'https://github.com/yourusername/project-two',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        title: 'Project Three',
        description: 'A mobile app built with React Native and Firebase.',
        link: 'https://github.com/yourusername/project-three',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        title: 'Project Four',
        description: 'A portfolio website built with Gatsby and GraphQL.',
        link: 'https://github.com/yourusername/project-four',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;


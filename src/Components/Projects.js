import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Projects.css';
import projectOneImage from '../images/project6.jpg';
import projectTwoImage from '../images/project3.jpg';
import projectThreeImage from '../images/project7.jpeg';
import projectFourImage from '../images/project8.jpg';

const projects = [
    {
        title: 'Ecommerce website',
        description: 'A web application that allows users to manage their tasks effectively.',
        link: 'https://github.com/yourusername/project-one',
        image: projectOneImage,
    },
    {
        title: 'Real-estate website',
        description: 'An e-commerce platform built with React and Node.js.',
        link: 'https://github.com/yourusername/project-two',
        image: projectTwoImage,
    },
    {
        title: 'Crowdfunding website',
        description: 'A mobile app built with React Native and Firebase.',
        link: 'https://github.com/yourusername/project-three',
        image: projectThreeImage,
    },
    {
        title: 'Portfolio website',
        description: 'A portfolio website built with Gatsby and GraphQL.',
        link: 'https://github.com/yourusername/project-four',
        image: projectFourImage,
    },
];

const Projects = () => {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate('/all-projects');
    };

    return (
        <section id="projects"  className="animate-on-scroll">
            <div  className="projects-section">
            <h2>Portfolio</h2>
            <div className="circles"></div> {/* Decorative circles */}
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
            </div>
        </section>
    );
};

export default Projects;

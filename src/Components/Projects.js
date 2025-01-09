import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectOneImage from '../images/project6.jpg';
import projectTwoImage from '../images/project3.jpg';

const projects = [
    {
        title: 'Ecommerce website',
        description: 'This website allows customers to explore a wide range of beauty products, add items to their cart, and securely complete their purchases.',
        link: 'https://truebeauty-tan.vercel.app/',
        image: projectOneImage,
    },
    {
        title: 'Real-estate website',
        description: 'A modern real estate platform that simplifies property buying, selling, and renting. This website features an intuitive interface where users can browse listings, view detailed property information, and connect with agents. ',
        link: 'https://urbanrealty.vercel.app/',
        image: projectTwoImage,
    },
];

const Projects = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleViewAll = () => {
        navigate('/all-projects'); // Navigate to the "All Projects" route
    };

    return (
        <section id="projects" className="animate-on-scroll">
            <div className="projects-section">
                <h2>Portfolio</h2>
                <div className="circles"></div> {/* Decorative circles */}
                <ul className="projects-list">
                    {projects.map((project, index) => (
                        <li key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={handleViewAll} className="view-all-button">
                    View All Projects
                </button>
            </div>
        </section>
    );
};

export default Projects;

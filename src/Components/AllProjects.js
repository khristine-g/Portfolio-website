import React from 'react';
import '../Projects.css';
import projectOneImage from '../images/portfolio9.jpg';
import projectTwoImage from '../images/portfolio9.jpg';
import projectThreeImage from '../images/portfolio9.jpg';
import projectFourImage from '../images/portfolio9.jpg';

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
    {
        title: 'Ecommerce website',
        description: 'This website allows customers to explore a wide range of beauty products, add items to their cart, and securely complete their purchases.',
        link: 'https://truebeauty-tan.vercel.app/',
        image: projectThreeImage,
    },
    {
        title: 'Real-estate website',
        description: 'A modern real estate platform that simplifies property buying, selling, and renting. This website features an intuitive interface where users can browse listings, view detailed property information, and connect with agents. ',
        link: 'https://urbanrealty.vercel.app/',
        image: projectFourImage,
    },
];

const AllProjects = () => {
    return (
        <section id="all-projects" className="projects-section">
            <h2>All Projects</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
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
        </section>
    );
};

export default AllProjects;

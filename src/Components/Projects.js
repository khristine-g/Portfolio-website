import React from 'react';

import projectOneImage from '../images/Screenshot3.png';
import projectTwoImage from '../images/Screenshot1.png';
import projectThreeImage from '../images/screenshot5.png';
import projectFourImage from '../images/Screenshot2.png';
import '../Projects.css';

const projects = [
  {
    title: 'Ecommerce website',
    description: 'A modern e-commerce platform for beauty products, featuring seamless checkout and product filtering.',
    techStack: 'React, Ruby on rails, Bootstrap,Css, Sqlite',
    link: 'https://truebeauty-tan.vercel.app/',
    github: 'https://github.com/khristine-g/Beauty-store',
    image: projectOneImage,
  },
  {
    title: 'Real-estate website',
    description: 'An intuitive real estate platform for browsing, buying, selling, and renting properties.',
    techStack: 'React, Ruby on Rails, Css,Sqlite',
    link: 'https://vercel.com/khristine-githiges-projects/realty',
    github: ' https://github.com/khristine-g/Real-estate',
    image: projectTwoImage,
  },
  
    {
      title: 'Crowdfunding Website',
      description: 'A platform to support and fund innovative projects, empowering creators to bring their ideas to life through collective contributions.',
      techStack: 'React, Bootstrap',
      link: 'https://empowerher-two.vercel.app/',
      github: 'https://github.com/khristine-g/Empowerher',
      image: projectThreeImage,
    },
    
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my web development projects and skills.',
    techStack: 'React,CSS',
    link: 'https://myportfolio.vercel.app/',
    github: 'https://github.com/khristine-g/Portfolio-website',
    image: projectFourImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" animate-on-scroll" >
    <div className=" projects-section">
      <div className="projects-container">
        <h2 className='projects-title'>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  <strong>Tech Stack: </strong>{project.techStack}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;

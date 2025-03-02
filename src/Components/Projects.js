import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectOneImage from "../images/Screenshot3.png";
import projectTwoImage from "../images/Screenshot1.png";
import projectThreeImage from "../images/screenshot5.png";
import projectFourImage from "../images/Screenshot2.png";
import "../Projects.css";

const projects = [
  {
    title: "Ecommerce website",
    description:
      "A modern e-commerce platform for beauty products, featuring seamless checkout and product filtering.",
    techStack: "React, Ruby on Rails, Bootstrap, CSS, SQLite",
    link: "https://truebeauty-tan.vercel.app/",
    github: "https://github.com/khristine-g/Beauty-store",
    image: projectOneImage,
  },
  {
    title: "Real-estate website",
    description:
      "An intuitive real estate platform for browsing, buying, selling, and renting properties.",
    techStack: "React, Ruby on Rails, CSS, SQLite",
    link: "https://realty-taupe.vercel.app/",
    github: "https://github.com/khristine-g/Real-estate",
    image: projectTwoImage,
  },
  {
    title: "Crowdfunding Website",
    description:
      "A platform to support and fund innovative projects, empowering creators to bring their ideas to life through collective contributions.",
    techStack: "React, Bootstrap",
    link: "https://empowerher-two.vercel.app/",
    github: "https://github.com/khristine-g/Empowerher",
    image: projectThreeImage,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my web development projects and skills.",
    techStack: "React, CSS",
    link: "https://khristineportfolio.vercel.app/",
    github: "https://github.com/khristine-g/Portfolio-website",
    image: projectFourImage,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects"  className="animate-on-scroll">
      <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">MY PORTFOLIO</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  <strong>Tech Stack: </strong>
                  {project.techStack}
                </div>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    

    </section>
    
  );
};

export default Projects;

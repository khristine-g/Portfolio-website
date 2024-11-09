import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import experienceImage from '../images/portfolio7.jpg'; // Update with actual path
import '../Experience.css'; // Import the CSS

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-content">
                <h3><FaBriefcase className="icon" /> Experience</h3>
                <div className="experience-item" style={{ backgroundColor: '#4CAF50' }}>
                    <span>2018 - Present</span>
                    <h4>Web Developer, Envato</h4>
                  
                </div>
                <div className="experience-item" style={{ backgroundColor: '#66BB6A' }}>
                    <span>2013 - 2018</span>
                    <h4>UI/UX Designer, Themeforest</h4>
                 
                </div>
            </div>
            <div className="experience-image">
                <img src={experienceImage} alt="Experience" />
            </div>
        </div>
    );
};

export default Experience;



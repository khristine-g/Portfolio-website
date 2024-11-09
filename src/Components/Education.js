import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import educationImage from '../images/portfolio10.jpg'; // Update with the actual path
import '../Education.css'; // Import the CSS

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-image">
                <img src={educationImage} alt="Education" />
            </div>
            <div className="education-content">
                <h3><FaGraduationCap className="icon" /> Education</h3>
                <div className="education-item" style={{ backgroundColor: '#4CAF50' ,borderRadius:'14px'}}>
                    <span>2018 - Present</span>
                    <h4>Engineering Degree, Oxford University</h4>
                    
                </div>
                <div className="education-item" style={{ backgroundColor: '#66BB6A' ,borderRadius:'14px'}}>
                    <span>2013 - 2018</span>
                    <h4>Master's Degree, Kiev University</h4>
               
                </div>
            </div>
        </div>
    );
};

export default Education;

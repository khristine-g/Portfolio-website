// src/components/Contact.js
import React from 'react';
import '../Contact.css';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons

const Contact = () => {
    return (
        <section id="contact"   className="animate-on-scroll" >
            <div  className="contact-section-wrapper">
            <section className="contact-section">
                <div className="left-side">
                    <h2>Let's Connect</h2>
                    <p className="intro-text">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:githigekhristine@mail.com">githigekhristine@mail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+21621184010">+216 21 184 010</a></p>
                    </div>
                    <div className="social-icons">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>

                <div className="right-side">
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                
            </section>
            </div>
        </section>
    );
};

export default Contact;

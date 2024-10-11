// src/components/Contact.js
import React from 'react';
import '../Contact.css';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Don't Be Shy!</h2>
            <p className="intro-text">
                Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-info">
                <p><strong>Mail me:</strong> <a href="mailto:kris@mail.com">kris@mail.com</a></p>
                <p><strong>Call me:</strong> <a href="tel:+21621184010">+216 21 184 010</a></p>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Your Subject" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <div className="social-icons">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
        </section>
    );
};

export default Contact;


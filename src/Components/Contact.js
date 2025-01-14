import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');  // State to track the form status

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_tafrsl8', // Replace with your EmailJS service ID
            'template_2vjq7lg', // Replace with your EmailJS template ID
            form.current,
            '7LnXQFeeV1KcNg5oe' // Replace with your EmailJS public key
        ).then(
            (result) => {
                setStatus('Message sent successfully!');  // Set status to success
                form.current.reset();  // Clear the form fields
                console.log(result.text);
            },
            (error) => {
                setStatus('Failed to send the message, please try again.');  // Set status to error
                console.log(error.text);
            }
        );
    };

    return (
        <section id="contact" className="animate-on-scroll">
            <div className="contact-circles"></div>
            <div className="contact-section-wrapper">
                <section className="contact-section">
                    <div className="left-side">
                        <div className="contact-divider-line"></div>
                        <h2 className="contact-title">Let's Connect</h2>
                        <p className="intro-text">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> <a href="mailto:githigekhristine@mail.com">githigekhristine@mail.com</a></p>
                            <p><strong>Phone:</strong> <a href="tel:+254725952696">+254725952696</a></p>
                        </div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/khristine-githige/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/khristine-g" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>

                    <div className="right-side">
                        <form ref={form} className="contact-form" onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="text" name="subject" placeholder="Subject" required />
                            <textarea name="message" placeholder="Message" required></textarea>
                            <button type="submit">
                                {status === 'Message sent successfully!' ? 'Sent!' : 'Send Message'}
                            </button>
                        </form>
                        {status && <p className="status-message">{status}</p>}  {/* Display the status message */}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contact;

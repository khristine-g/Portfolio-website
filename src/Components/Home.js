import React, { useEffect } from "react";
import "../Home.css";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="animate-on-scroll">
      <div className="home-container">
        {/* Home Circles */}
        <div className="home-circles"></div>

        {/* Text Section: Hi, I'm Khristine */}
        <div className="text-section">
          <h1 className="developer-name">Hi, I'm Khristine</h1>
          <h2 className="developer-title">
            <span className="dynamic-role">Software Developer</span>
          </h2>
          <p className="developer-description">
            I'm dedicated to building intuitive, user-focused web applications. I’m passionate about leveraging technology to solve problems and create meaningful digital experiences.
          </p>
          <div className="buttons">
            <a href="/path/to/cv.pdf" download className="download-cv-btn">
              Download CV
            </a>
            <a href="/contact" className="contact-btn">Contact</a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="divider-line"></div>

        {/* Code Snippet Section: App Window Look */}
        <div className="code-section">
          <div className="code-snippet-header">
            <span className="code-circle red"></span>
            <span className="code-circle yellow"></span>
            <span className="code-circle green"></span>
          </div>
          <pre className="mock-code">
            <code>
              {`// Hello, World! 👩‍💻
function makeApp() {
    const skills = ["React", "Ruby on Rails", "UI/UX Design"];
    const motto = "Transforming ideas into user-friendly web apps!";
    console.log("Your next web developer, ready to code! 💻");
    return { skills, motto };
}

makeApp();`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Home;



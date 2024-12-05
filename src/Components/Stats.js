import React, { useState, useEffect, useRef } from 'react';
import '../Stats.css';

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState({
    happyClients: 0,
    projectsCompleted: 0,
    yearsOfExperience: 0,
    techStacksMastered: 0,
  });
  const statsRef = useRef(null);

  // Detect if the stats section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count-up logic
  useEffect(() => {
    if (isInView) {
      const intervals = [
        { target: 5, key: 'happyClients' },
        { target: 20, key: 'projectsCompleted' },
        { target: 2, key: 'yearsOfExperience' },
        { target: 15, key: 'techStacksMastered' },
      ];

      intervals.forEach(({ target, key }) => {
        let interval = setInterval(() => {
          setCounts((prevCounts) => {
            const increment = Math.ceil(target / 100); // Increment adjusted for smoother animation
            if (prevCounts[key] < target) {
              return { ...prevCounts, [key]: prevCounts[key] + increment };
            } else {
              clearInterval(interval);
              return { ...prevCounts, [key]: target };
            }
          });
        }, 50); // Slower speed by increasing the interval time
      });
    }
  }, [isInView]);

  return (
    <section id="stats" className="animate-on-scroll" ref={statsRef}>
      <div className="stats-container">
        <div className="stat-item">
          <h2 className="stat-number">{counts.happyClients}<span>+</span></h2>
          <p className="stat-label">Happy Clients</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">{counts.projectsCompleted}<span>+</span></h2>
          <p className="stat-label">Projects Completed</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">{counts.yearsOfExperience}<span>+</span></h2>
          <p className="stat-label">Years of Experience</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">{counts.techStacksMastered}<span>+</span></h2>
          <p className="stat-label">Tech Stacks Mastered</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

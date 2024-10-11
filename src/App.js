import React, { useEffect, useState } from 'react';
import './App.css'; // Global styles including the cursor shadow
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
    const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorStyle({ top: `${e.clientY}px`, left: `${e.clientX}px` });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Home />
            <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
            {/* Custom cursor */}
            <div className="custom-cursor" style={cursorStyle}></div>
        </div>
    );
};

export default App;

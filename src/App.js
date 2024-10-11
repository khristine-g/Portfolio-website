import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <Skills />
      
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

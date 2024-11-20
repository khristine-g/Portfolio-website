import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import AllProjects from "./Components/AllProjects";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import useScrollAnimation from "./Components/useScrollAnimation";

const App = () => {
    useScrollAnimation(); // Ensure scroll animations are initialized

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Home />
                <Skills />
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/all-projects" element={<AllProjects />} />
                </Routes>
                <About />
                <Contact />
                <Footer />
            </Router>
        </div>
    );
};

export default App;




// import React from 'react';
// import './App.css'; // Global styles including the cursor shadow
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Projects from './Components/Projects';

// import AllProjects from './Components/AllProjects';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Skills from './Components/Skills';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';


// const App = () => {
    

//     return (
//         <div className="App">
//             <Router>
//             <Navbar />
//             <Home />
//             <Skills />
          
           
           
          
            
//             <Routes>
//             <Route path="/" element={<Projects />} />
             
//                 <Route path="/all-projects" element={<AllProjects />} />
//             </Routes>
//             <About />
//             <Contact />
//             <Footer />

//         </Router>
            
           
//         </div>
//     );
// };

// export default App;

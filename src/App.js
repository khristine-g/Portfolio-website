import React from 'react';
import './App.css'; // Global styles including the cursor shadow
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';

import AllProjects from './Components/AllProjects';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


const App = () => {
    

    return (
        <div className="App">
            <Router>
            <Navbar />
            <Home />
            <Projects />
            
            <Routes>
               
                <Route path="/all-projects" element={<AllProjects />} />
            </Routes>
        </Router>
            
           
        </div>
    );
};

export default App;

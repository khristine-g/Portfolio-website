// src/components/Home.js
import React from 'react';
import '../Home.css';


const Home = () => {
    return (
        <section id="home">
        <div className="home-container">
            
            <div className="image-section">
                <img src="https://images.unsplash.com/photo-1722281992917-f0db368f6889?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D" alt="Khristine Githige" />
            </div>
            <div className="text-section">
                <h1> I'M KHRISTINE GITHIGE.</h1>
                <h2>WEB DESIGNER</h2>
                <p>
                    I'm a full stack web developer focused on crafting clean & user-friendly experiences. 
                    I am passionate about building excellent software that improves the lives of those around me.
                </p>
            </div>
            
        </div>
        </section>
    );
};

export default Home;

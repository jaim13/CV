import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Languages from './components/Languages';
import Education from './components/Education';
import Soft_Skills from './components/Soft_Skills'; 
import TechSkills from './components/TechSkills'; 
import Projects from './components/Projects.js';
import Footer from './components/footer';
import Me from './components/Me.js';

function App() {
  useEffect(() => {
    // Cambia el título de la pestaña del navegador
    document.title = "Jaim Martínez-CV";
  }, []);
  return (
    <div className="App">
      {/* Renderiza el componente Header */}
      <Header />
      <div>
      <Projects />
      </div>
      {/* Carrousel */}
      <Carousel />
      {/* Languages what i speak */}
      <Languages />
      {/* Education */}
      <Education />
      {/* Soft Skills */}
      <Soft_Skills />
      {/* Tech Skills */}
      <TechSkills />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

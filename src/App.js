import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Languages from './components/Languages';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      {/* Renderiza el componente Header */}
      <Header />
      {/*Carrousel*/ }
      <Carousel />
      { /*Languages what i speak*/ }
      <Languages />
      {/*Education */}
      <Education />
    </div>
  );
}

export default App;

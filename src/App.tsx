// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projet from './components/Projet';
import Contact from './components/Contact';
import Footer from "./components/footer"; // Correction ici

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </div>
  );
};

export default App;

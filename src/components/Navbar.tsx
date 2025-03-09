import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/experience"
            className={`navbar-link ${location.pathname === '/experience' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Expérience
          </Link>
          <Link
            to="/projet"
            className={`navbar-link ${location.pathname === '/projet' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Projet
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        {/* Conteneur pour le menu burger et le titre sur les petits écrans */}
        <div className="navbar-mobile-container">
          <div className="navbar-burger" onClick={toggleMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          {/* Titre à côté du menu burger sur les petits écrans */}
          <div className="navbar-mobile-title">BONNAIRE MYRIAME PORTFOLIO </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

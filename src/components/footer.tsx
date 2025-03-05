import React from "react";
import { Link } from "react-router-dom";
import "../assets/footer.css"; // Assure-toi d'ajouter du style

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Section des icônes */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link to="/">Accueil</Link>
          <Link to="/experience">Expérience</Link>
          <Link to="/projet">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Copyright */}
        <p className="copyright">&copy; 2025 - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

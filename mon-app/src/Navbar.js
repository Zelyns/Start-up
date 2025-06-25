import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">OrienTech</div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><a href="#">À propos</a></li>
        <li><Link to="/connexion">Connexion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

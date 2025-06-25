import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="logo">OrienTech</div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><a href="#">À propos</a></li>
        {!user ? (
          <li><Link to="/connexion">Connexion</Link></li>
        ) : (
          <>
            <li>Bienvenue, {user.prenom} !</li>
            <li>
              <button onClick={onLogout}>Déconnecter</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

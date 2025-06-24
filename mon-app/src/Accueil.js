import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <div className="Accueil">
      <nav className="Navbar">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de votre application React.</p>
    </div>
  );
}

export default Accueil;

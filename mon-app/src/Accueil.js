import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <div className="accueil-container">
      <nav className="navbar">
        <div className="logo">OrienTech</div>
        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Découvre ton avenir dès aujourd’hui</h1>
          <p>OrienTech t’aide à trouver les métiers faits pour toi grâce à un test rapide et des conseils personnalisés.</p>
          <a href="#" className="cta-button">Faire le test d’orientation</a>
        </div>
      </header>
    </div>
  );
}

export default Accueil;

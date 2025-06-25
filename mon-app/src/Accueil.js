import React from 'react';
import './Accueil.css';
import Navbar from './Navbar';

function Accueil() {
  return (
    <div className="accueil-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Découvre ton avenir dès aujourd’hui</h1>
          <p>OrienTech t’aide à trouver les métiers faits pour toi grâce à un test rapide et des conseils personnalisés.</p>
          <a href="/orientation" className="cta-button">Faire le test d’orientation</a>
        </div>
      </header>
    </div>
  );
}

export default Accueil;

import React from 'react';
import './Accueil.css';
import illustration from './assets/illustration.svg'; // à ajouter dans /assets

function Accueil() {
  return (
    <>
      <div className="accueil-container">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Découvre ton avenir dès aujourd’hui</h1>
            <p>
              OrienTech t’aide à trouver les métiers faits pour toi grâce à un test rapide
              et des conseils personnalisés.
            </p>
            <a href="/orientation" className="cta-button">Faire le test d’orientation</a>
          </div>
          <div className="hero-image">
            <img src={illustration} alt="Orientation illustration" />
          </div>
        </header>

        <section className="features-section">
          <h2>Pourquoi OrienTech ?</h2>
          <div className="features">
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Rapide" />
              <h3>Rapide</h3>
              <p>Un test en moins de 5 minutes pour mieux te connaître.</p>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Personnalisé" />
              <h3>Personnalisé</h3>
              <p>Des résultats adaptés à ta personnalité et à tes intérêts.</p>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" alt="Gratuit" />
              <h3>Gratuit</h3>
              <p>OrienTech est 100% gratuit, sans engagement.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Accueil;
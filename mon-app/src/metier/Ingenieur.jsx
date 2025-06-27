import React from 'react';
import './Metiers.css';

function Ingenieure() {
  return (
    <div className="metier-container">
      <h1>Métier : Ingénieure</h1>

      <p className="description">
        L’ingénieure conçoit, analyse et développe des solutions techniques dans des domaines variés :
        informatique, construction, énergie, biotechnologie, aéronautique... Elle joue un rôle clé dans l’innovation
        et la résolution de problèmes complexes.
      </p>

      <section className="metier-section">
        <h2>🎯 Missions principales</h2>
        <ul>
          <li>Analyser des besoins techniques et fonctionnels</li>
          <li>Concevoir des produits ou systèmes complexes</li>
          <li>Superviser la réalisation et les tests</li>
          <li>Assurer la gestion de projets techniques</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>📊 Spécialisations possibles</h2>
        <ul>
          <li>Ingénieure informatique / logiciel</li>
          <li>Ingénieure en environnement</li>
          <li>Ingénieure en mécanique, électronique, énergie</li>
          <li>Ingénieure R&D, en aéronautique, biomédical...</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💼 Évolution de carrière</h2>
        <ul>
          <li>Cheffe de projet technique</li>
          <li>Responsable R&D</li>
          <li>Directrice d’ingénierie ou CTO</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💰 Salaires estimés</h2>
        <ul>
          <li>Débutante : 35 000€ – 42 000€</li>
          <li>Confirmée : 45 000€ – 60 000€</li>
          <li>Sénior / Manager : 65 000€ – 90 000€+</li>
        </ul>
      </section>
    </div>
  );
}

export default Ingenieure;
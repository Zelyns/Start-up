import React from 'react';
import './Metiers.css';

function Developpeur() {
  return (
    <div className="metier-container">
      <h1>Métier : Développeur</h1>

      <p className="description">
        Le développeur conçoit, programme et maintient des applications ou des sites web.
        Il travaille en collaboration avec des designers, chefs de projets ou ingénieurs systèmes
        pour créer des solutions digitales fonctionnelles et efficaces.
      </p>

      <section className="metier-section">
        <h2>🎯 Missions principales</h2>
        <ul>
          <li>Développement et maintenance d’applications web ou mobiles</li>
          <li>Participation à la conception technique de projets</li>
          <li>Correction de bugs, mise en place de tests</li>
          <li>Collaboration avec des équipes pluridisciplinaires</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>📊 Différents postes</h2>
        <ul>
          <li>Développeur Front-end</li>
          <li>Développeur Back-end</li>
          <li>Développeur Full-stack</li>
          <li>Développeur mobile (Android/iOS)</li>
          <li>Ingénieur logiciel</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💼 Évolution possible</h2>
        <ul>
          <li>Lead développeur</li>
          <li>Architecte logiciel</li>
          <li>CTO (Chief Technical Officer)</li>
          <li>Freelance ou entrepreneur tech</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💰 Salaires estimés</h2>
        <ul>
          <li>Junior (0-2 ans) : 30 000€ – 40 000€</li>
          <li>Confirmé : 40 000€ – 55 000€</li>
          <li>Senior : 55 000€ – 75 000€</li>
          <li>Lead / Architecte : 70 000€ – 100 000€+</li>
        </ul>
      </section>
    </div>
  );
}

export default Developpeur;
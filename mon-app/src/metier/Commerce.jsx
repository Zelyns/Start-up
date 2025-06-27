import React from 'react';
import './Metiers.css';

function Commerce() {
  return (
    <div className="metier-container">
      <h1>Métier : Commerce</h1>

      <p className="description">
        Le secteur du commerce regroupe des métiers liés à la vente, à la relation client, au marketing
        et à la stratégie. On y retrouve des postes variés dans presque tous les secteurs d’activité.
      </p>

      <section className="metier-section">
        <h2>🎯 Missions principales</h2>
        <ul>
          <li>Vendre des produits ou services</li>
          <li>Développer un portefeuille clients</li>
          <li>Analyser le marché et définir une stratégie commerciale</li>
          <li>Négocier et conclure des contrats</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>📊 Postes courants</h2>
        <ul>
          <li>Commercial terrain ou sédentaire</li>
          <li>Chef de produit</li>
          <li>Responsable marketing</li>
          <li>Business developer</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💼 Évolution possible</h2>
        <ul>
          <li>Responsable commercial</li>
          <li>Directeur des ventes</li>
          <li>Directeur marketing ou commercial</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💰 Salaires estimés</h2>
        <ul>
          <li>Débutant : 25 000€ – 35 000€ + primes</li>
          <li>Confirmé : 40 000€ – 60 000€</li>
          <li>Cadre ou directeur : 70 000€ – 100 000€+</li>
        </ul>
      </section>
    </div>
  );
}

export default Commerce;
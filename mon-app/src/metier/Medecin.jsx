import React from 'react';
import './Metiers.css';

function Medecin() {
  return (
    <div className="metier-container">
      <h1>Métier : Médecin</h1>

      <p className="description">
        Le médecin soigne, diagnostique et accompagne les patients au quotidien.
        Il peut exercer en cabinet, à l’hôpital ou dans des structures spécialisées, avec une multitude de spécialisations possibles.
      </p>

      <section className="metier-section">
        <h2>🎯 Missions principales</h2>
        <ul>
          <li>Examiner, diagnostiquer et prescrire des traitements</li>
          <li>Suivre l’évolution de la santé des patients</li>
          <li>Orienter vers des spécialistes si nécessaire</li>
          <li>Travailler en lien avec des équipes médicales</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>📊 Spécialisations</h2>
        <ul>
          <li>Médecin généraliste</li>
          <li>Pédiatre, cardiologue, dermatologue...</li>
          <li>Médecin urgentiste ou du travail</li>
          <li>Chirurgien</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💼 Évolution possible</h2>
        <ul>
          <li>Chef de service</li>
          <li>Responsable de clinique ou directeur médical</li>
          <li>Enseignant-chercheur en médecine</li>
        </ul>
      </section>

      <section className="metier-section">
        <h2>💰 Salaires estimés</h2>
        <ul>
          <li>Interne : 1 500€ – 2 500€</li>
          <li>Médecin hospitalier : 3 000€ – 6 000€</li>
          <li>Médecin libéral expérimenté : 7 000€ – 10 000€+</li>
        </ul>
      </section>
    </div>
  );
}

export default Medecin;
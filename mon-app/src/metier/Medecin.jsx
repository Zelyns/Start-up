import React from 'react';
import './Metiers.css';

function Medecin() {
  return (
    <div className="metier-container">
      <h1>Métier : Médecin</h1>
      <p className="description">
        Le médecin diagnostique, soigne et accompagne ses patients. Il peut se spécialiser (cardiologue, généraliste, pédiatre…)
        et travaille dans des hôpitaux, cabinets ou centres de santé.
      </p>

      <div className="metier-infos">
        <div className="info-block">
          <h3>🧠 Compétences</h3>
          <p>Empathie, rigueur scientifique, capacité à prendre des décisions rapidement</p>
        </div>
        <div className="info-block">
          <h3>🎓 Formations</h3>
          <p>Études de médecine (9 à 12 ans), PASS/LAS, internat</p>
        </div>
        <div className="info-block">
          <h3>🚀 Débouchés</h3>
          <p>Médecin généraliste, spécialiste, chercheur, urgentiste, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Medecin;
import React from 'react';
import './Metiers.css';

function Ingenieur() {
  return (
    <div className="metier-container">
      <h1>Métier : Ingénieur</h1>
      <p className="description">
        L’ingénieur conçoit, améliore ou supervise des systèmes complexes dans des domaines variés : informatique, industrie, environnement, etc.
      </p>

      <div className="metier-infos">
        <div className="info-block">
          <h3>🧠 Compétences</h3>
          <p>Analyse, technique, logique, créativité, rigueur</p>
        </div>
        <div className="info-block">
          <h3>🎓 Formations</h3>
          <p>Bac+5 (école d'ingénieur, Master en sciences ou technologies)</p>
        </div>
        <div className="info-block">
          <h3>🚀 Débouchés</h3>
          <p>Ingénieur logiciel, industriel, data, R&D, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Ingenieur;
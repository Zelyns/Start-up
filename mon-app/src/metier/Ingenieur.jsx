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
      <button
        style={{
          marginTop: "2rem",
          backgroundColor: "#00ABE4",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => window.location.href = "/rdv"}
      >
        Prendre RDV avec un professionnel
      </button>
    </div>
    
  );
}


export default Ingenieur;
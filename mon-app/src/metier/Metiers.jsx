import React from 'react';
import { Link } from 'react-router-dom';
import './Metiers.css';

function Metiers() {
  return (
    <div className="metiers-list-container">
      <h2>Découvre les métiers possibles</h2>
      <div className="metier-cards">
        <Link to="/metier/developpeur" className="metier-card">
          <h3>💻 Développeur</h3>
          <p>Création de sites web, applications, logiciels...</p>
        </Link>
        <Link to="/metier/medecin" className="metier-card">
          <h3>🩺 Médecin</h3>
          <p>Soigner, diagnostiquer, accompagner les patients</p>
        </Link>
        <Link to="/metier/commerce" className="metier-card">
          <h3>💼 Commerce</h3>
          <p>Marketing, vente, stratégie, négociation</p>
        </Link>
      </div>
    </div>
  );
}

export default Metiers;
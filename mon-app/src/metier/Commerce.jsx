import React from 'react';
import './Metiers.css';

function Commerce() {
  return (
    <div className="metier-container">
      <h1>Métier : Commerce</h1>
      <p className="description">
        Les métiers du commerce touchent à la vente, au marketing, à la relation client ou encore à la stratégie d’entreprise.
        On y trouve des postes variés dans tous les secteurs.
      </p>

      <div className="metier-infos">
        <div className="info-block">
          <h3>🧠 Compétences</h3>
          <p>Négociation, sens du contact, organisation, stratégie</p>
        </div>
        <div className="info-block">
          <h3>🎓 Formations</h3>
          <p>BTS, DUT, Licence pro, école de commerce, Master</p>
        </div>
        <div className="info-block">
          <h3>🚀 Débouchés</h3>
          <p>Commercial, chef de produit, responsable marketing, business developer…</p>
        </div>
      </div>
    </div>
  );
}

export default Commerce;
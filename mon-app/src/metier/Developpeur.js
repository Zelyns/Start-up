import React from 'react';
import './Metiers.css';

function Developpeur() {
  return (
    <div className="metier-container">
      <h1>Métier : Développeur</h1>
      <p className="description">
        Le développeur conçoit, code, teste et maintient des applications ou des sites web. 
        Il maîtrise différents langages de programmation et travaille souvent en équipe sur des projets variés.
      </p>

      <div className="metier-infos">
        <div className="info-block">
          <h3>🧠 Compétences</h3>
          <p>Programmation, résolution de problèmes, travail en équipe</p>
        </div>
        <div className="info-block">
          <h3>🎓 Formations</h3>
          <p>Bac+2 à Bac+5 (BTS, DUT, Licence, Master, écoles d’ingénieurs…)</p>
        </div>
        <div className="info-block">
          <h3>🚀 Débouchés</h3>
          <p>Développeur web, mobile, logiciel, fullstack, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Developpeur;
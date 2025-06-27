import React from 'react';

function ChoixProfessionnel() {
  const professionnels = [
    { nom: "Alice Martin", metier: "Développeur", email: "alice@pro.com", prix: 15 },
    { nom: "Jean Dupont", metier: "Médecin", email: "jean@pro.com", prix: 20 },
    { nom: "Sophie Leroy", metier: "Ingénieur", email: "sophie@pro.com", prix: 12 },
  ];

  return (
    <div style={{ maxWidth: 500, margin: "3rem auto", textAlign: "center" }}>
      <h2>Choisissez un professionnel</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {professionnels.map((pro, idx) => (
          <li key={idx} style={{ margin: "1.5rem 0", border: "1px solid #00ABE4", borderRadius: 8, padding: 16 }}>
            <h3>{pro.nom}</h3>
            <p>{pro.metier}</p>
            <p style={{ color: "#333" }}>Prix du RDV : <strong>{pro.prix} €</strong></p>
            <a href={`mailto:${pro.email}`} style={{ color: "#00ABE4", fontWeight: "bold" }}>
              Prendre RDV par mail
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChoixProfessionnel;
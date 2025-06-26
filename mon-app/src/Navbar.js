import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

 const handleSearch = (e) => {
  e.preventDefault();
  const keyword = search.trim().toLowerCase();

  if (['developpeur', 'développeur'].includes(keyword)) {
    navigate('/metier/developpeur');
  } else if (['medecin', 'médecin'].includes(keyword)) {
    navigate('/metier/medecin');
  } else if (['commerce', 'commercial', 'marketing'].includes(keyword)) {
    navigate('/metier/commerce');
  } else if (['ingenieur', 'ingénieur'].includes(keyword)) {
    navigate('/metier/ingenieur');
  } else {
    alert('Métier non trouvé pour cette démo.');
  }

  setSearch('');
};

  return (
    <nav className="navbar">
      <div className="logo">OrienTech</div>

      <div className="nav-section">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Rechercher un métier..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>

        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><a href="#">À propos</a></li>
          {!user ? (
            <li><Link to="/connexion">Connexion</Link></li>
          ) : (
            <>
              <li>Bienvenue, {user.prenom} !</li>
              <li>
                <button onClick={onLogout}>Déconnecter</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
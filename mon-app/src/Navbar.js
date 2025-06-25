import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    if (search.trim().toLowerCase() === 'développeur' || search.trim().toLowerCase() === 'developpeur') {
      navigate('/metier/developpeur');
    } else {
      alert('Métier non trouvé pour cette démo.');
    }
    setSearch('');
  };

  return (
    <nav className="navbar">
      <div className="logo">OrienTech</div>
      <form onSubmit={handleSearch} style={{ display: 'inline-block', marginRight: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher un métier..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ marginLeft: '5px', padding: '5px 10px' }}>Rechercher</button>
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
    </nav>
  );
}

export default Navbar;

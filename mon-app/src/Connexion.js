import React, { useState } from 'react';
import './Connexion.css';

function Connexion({ setUser }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost/mon-api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });
      const data = await res.json();
      if (data.success) {
        setUser({ prenom: data.prenom });
        setMessage('');
      } else {
        setMessage(data.message || 'Erreur de connexion');
      }
    } catch (err) {
      setMessage('Erreur lors de la connexion');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    if (register.password !== register.confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      const res = await fetch('http://localhost/mon-api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(register),
      });
      const data = await res.json();
      setMessage(data.message || 'Inscription réussie');
    } catch (err) {
      setMessage("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin} className="form-section">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={login.email}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={login.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Se connecter</button>
      </form>

      <h2>Inscription</h2>
      <form onSubmit={handleRegister} className="form-section">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={register.nom}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={register.prenom}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={register.email}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={register.password}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={register.confirmPassword}
          onChange={handleRegisterChange}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Connexion;
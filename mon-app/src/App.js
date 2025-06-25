
import './App.css';
import React, { useState } from 'react';
import OrientationTest from './OrientationTest';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Developpeur from './Developpeur';
import Connexion from './Connexion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion setUser={setUser} />} />
          <Route path="/metier/developpeur" element={<Developpeur />} />
          <Route path="/orientation" element={<OrientationTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


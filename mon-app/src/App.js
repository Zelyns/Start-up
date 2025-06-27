import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './Accueil';
import Connexion from './Connexion';
import OrientationTest from './OrientationTest';
import Navbar from './Navbar';

// Pages métier
import Developpeur from './metier/Developpeur';
import Medecin from './metier/Medecin';
import Commerce from './metier/Commerce';
import Ingenieur from './metier/Ingenieur';
import ChoixProfessionnel from './ChoixProfessionnel';

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
          <Route path="/orientation" element={<OrientationTest />} />

          {/* Pages métier */}
          <Route path="/metier/developpeur" element={<Developpeur />} />
          <Route path="/metier/medecin" element={<Medecin />} />
          <Route path="/rdv" element={<ChoixProfessionnel />} />
          <Route path="/metier/commerce" element={<Commerce />} />
          <Route path="/metier/ingenieur" element={<Ingenieur />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
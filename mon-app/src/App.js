
import './App.css';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Connection from './Connection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connection" element={<Connection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


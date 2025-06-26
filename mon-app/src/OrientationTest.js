import React, { useState, useEffect } from 'react';
import './OrientationTest.css';
import jsPDF from 'jspdf';

function OrientationTest() {
  const initialForm = {
    loisirs: '', matieresPref: '', pratiqueOuTheorique: '', aideOuCreer: '',
    journeeMetier: '', matieresFortes: '', matiereDifficile: '', seulOuGroupe: '',
    oral: '', ecrit: '', numerique: '', stage: '', organise: '', decision: '',
    dirigerOuExecuter: '', probleme: '', changement: '', important: '', lieu: '',
    equilibre: '', reve: '', modele: '', ideeMetier: '', etudes: '', filieres: ''
  };

  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState(0);

  // Met à jour la progression en fonction du nombre de champs remplis
  useEffect(() => {
    const total = Object.keys(form).length;
    const filled = Object.values(form).filter(v => v.trim() !== '').length;
    setProgress(Math.round((filled / total) * 100));
  }, [form]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fortes = form.matieresFortes.toLowerCase();
    const reve = form.reve.toLowerCase();
    const pratique = form.pratiqueOuTheorique.toLowerCase();

    if (fortes.includes('math') || fortes.includes('physique') || pratique.includes('pratique')) {
      setResult('🔧 La meilleure orientation pour vous est : ingénieur');
    } else if (fortes.includes('svt') || fortes.includes('biologie') || reve.includes('médecin')) {
      setResult('🩺 La meilleure orientation pour vous est : médecine');
    } else {
      setResult('💼 La meilleure orientation pour vous est : commerce');
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Résultat du test d’orientation', 20, 20);
    doc.setFontSize(12);
    doc.text(result, 20, 30);

    let y = 40;
    Object.entries(form).forEach(([key, value]) => {
      doc.text(`${key} : ${value}`, 20, y);
      y += 8;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('resultat-orientation.pdf');
  };

  if (result) {
    return (
      <div className="orientation-container">
        <h2>Résultat du test</h2>
        <p style={{ fontSize: '1.2rem' }}>{result}</p>
        <button onClick={() => setResult('')}>Refaire le test</button>
        <button onClick={handleDownload} style={{ marginLeft: '1rem' }}>📄 Télécharger le PDF</button>
      </div>
    );
  }

  return (
    <div className="orientation-container">
      <h2>Test d’orientation</h2>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p style={{ textAlign: 'right', marginBottom: '1rem' }}>{progress}% complété</p>

      <form onSubmit={handleSubmit}>
        <h3>🧠 1. Centres d’intérêt</h3>
        <label>Loisirs ?
          <input type="text" name="loisirs" value={form.loisirs} onChange={handleChange} required />
        </label>
        <label>Matières préférées ?
          <input type="text" name="matieresPref" value={form.matieresPref} onChange={handleChange} required />
        </label>
        <label>Activités pratiques ou théoriques ?
          <input type="text" name="pratiqueOuTheorique" value={form.pratiqueOuTheorique} onChange={handleChange} required />
        </label>
        <label>Aider, créer, organiser ?
          <input type="text" name="aideOuCreer" value={form.aideOuCreer} onChange={handleChange} required />
        </label>
        <label>Journée dans quel métier ?
          <input type="text" name="journeeMetier" value={form.journeeMetier} onChange={handleChange} required />
        </label>

        <h3>🛠 2. Compétences & matières scolaires</h3>
        <label>Matières fortes ?
          <input type="text" name="matieresFortes" value={form.matieresFortes} onChange={handleChange} required />
        </label>
        <label>Matière difficile ?
          <input type="text" name="matiereDifficile" value={form.matiereDifficile} onChange={handleChange} required />
        </label>
        <label>Seul ou en groupe ?
          <input type="text" name="seulOuGroupe" value={form.seulOuGroupe} onChange={handleChange} required />
        </label>
        <label>A l’oral ?
          <input type="text" name="oral" value={form.oral} onChange={handleChange} required />
        </label>
        <label>A l’écrit ?
          <input type="text" name="ecrit" value={form.ecrit} onChange={handleChange} required />
        </label>
        <label>Numérique ?
          <input type="text" name="numerique" value={form.numerique} onChange={handleChange} required />
        </label>
        <label>Stage ou job ?
          <input type="text" name="stage" value={form.stage} onChange={handleChange} required />
        </label>

        <h3>💡 3. Personnalité</h3>
        <label>Organisé ou spontané ?
          <input type="text" name="organise" value={form.organise} onChange={handleChange} required />
        </label>
        <label>Décisions faciles ?
          <input type="text" name="decision" value={form.decision} onChange={handleChange} required />
        </label>
        <label>Diriger ou exécuter ?
          <input type="text" name="dirigerOuExecuter" value={form.dirigerOuExecuter} onChange={handleChange} required />
        </label>
        <label>Face aux problèmes ?
          <input type="text" name="probleme" value={form.probleme} onChange={handleChange} required />
        </label>
        <label>À l’aise avec le changement ?
          <input type="text" name="changement" value={form.changement} onChange={handleChange} required />
        </label>

        <h3>🌍 4. Valeurs & aspirations</h3>
        <label>Ce qui est important ?
          <input type="text" name="important" value={form.important} onChange={handleChange} required />
        </label>
        <label>Bureau, extérieur, machines ?
          <input type="text" name="lieu" value={form.lieu} onChange={handleChange} required />
        </label>
        <label>Équilibre vie pro/perso ?
          <input type="text" name="equilibre" value={form.equilibre} onChange={handleChange} required />
        </label>
        <label>Ton rêve ?
          <input type="text" name="reve" value={form.reve} onChange={handleChange} required />
        </label>
        <label>Modèles ?
          <input type="text" name="modele" value={form.modele} onChange={handleChange} required />
        </label>

        <h3>📈 5. Projet d’avenir</h3>
        <label>Idée de métier ?
          <input type="text" name="ideeMetier" value={form.ideeMetier} onChange={handleChange} required />
        </label>
        <label>Études après bac ?
          <input type="text" name="etudes" value={form.etudes} onChange={handleChange} required />
        </label>
        <label>Filières connues ?
          <input type="text" name="filieres" value={form.filieres} onChange={handleChange} required />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default OrientationTest;
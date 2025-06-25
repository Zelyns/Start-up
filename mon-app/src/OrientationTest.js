import React, { useState } from 'react';

function OrientationTest() {
  const [form, setForm] = useState({
    loisirs: '',
    matieresPref: '',
    pratiqueOuTheorique: '',
    aideOuCreer: '',
    journeeMetier: '',
    matieresFortes: '',
    matiereDifficile: '',
    seulOuGroupe: '',
    oral: '',
    ecrit: '',
    numerique: '',
    stage: '',
    organise: '',
    decision: '',
    dirigerOuExecuter: '',
    probleme: '',
    changement: '',
    important: '',
    lieu: '',
    equilibre: '',
    reve: '',
    modele: '',
    ideeMetier: '',
    etudes: '',
    filieres: '',
  });
  const [result, setResult] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Logique très simple pour l'exemple :
    if (
      form.matieresFortes.toLowerCase().includes('math') ||
      form.matieresFortes.toLowerCase().includes('physique') ||
      form.pratiqueOuTheorique.toLowerCase().includes('pratique')
    ) {
      setResult('La meilleure orientation pour vous est : ingénieur');
    } else if (
      form.matieresFortes.toLowerCase().includes('svt') ||
      form.matieresFortes.toLowerCase().includes('biologie') ||
      form.reve.toLowerCase().includes('médecin')
    ) {
      setResult('La meilleure orientation pour vous est : médecine');
    } else {
      setResult('La meilleure orientation pour vous est : commerce');
    }
  };

  if (result) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Résultat du test</h2>
        <p>{result}</p>
        <button onClick={() => setResult('')}>Refaire le test</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Test d’orientation</h2>
      <form onSubmit={handleSubmit}>
        <h3>🧠 1. Centres d’intérêt</h3>
        <label>Qu’est-ce que tu préfères faire pendant ton temps libre ?<br />
          <input type="text" name="loisirs" value={form.loisirs} onChange={handleChange} required />
        </label><br />
        <label>Quel(s) sujet(s) t'intéressent le plus à l'école ? Pourquoi ?<br />
          <input type="text" name="matieresPref" value={form.matieresPref} onChange={handleChange} required />
        </label><br />
        <label>Préfères-tu des activités pratiques ou théoriques ?<br />
          <input type="text" name="pratiqueOuTheorique" value={form.pratiqueOuTheorique} onChange={handleChange} required />
        </label><br />
        <label>Aimes-tu aider les autres, créer, résoudre des problèmes, organiser… ?<br />
          <input type="text" name="aideOuCreer" value={form.aideOuCreer} onChange={handleChange} required />
        </label><br />
        <label>Si tu pouvais passer une journée dans un métier, lequel choisirais-tu ?<br />
          <input type="text" name="journeeMetier" value={form.journeeMetier} onChange={handleChange} required />
        </label><br />

        <h3>🛠 2. Compétences et matières scolaires</h3>
        <label>Quelles matières réussis-tu le mieux ?<br />
          <input type="text" name="matieresFortes" value={form.matieresFortes} onChange={handleChange} required />
        </label><br />
        <label>Quelle matière trouves-tu la plus difficile ?<br />
          <input type="text" name="matiereDifficile" value={form.matiereDifficile} onChange={handleChange} required />
        </label><br />
        <label>Préfères-tu travailler seul ou en groupe ?<br />
          <input type="text" name="seulOuGroupe" value={form.seulOuGroupe} onChange={handleChange} required />
        </label><br />
        <label>Te sens-tu à l’aise à l’oral ?<br />
          <input type="text" name="oral" value={form.oral} onChange={handleChange} required />
        </label><br />
        <label>À l’écrit ?<br />
          <input type="text" name="ecrit" value={form.ecrit} onChange={handleChange} required />
        </label><br />
        <label>Avec les outils numériques ?<br />
          <input type="text" name="numerique" value={form.numerique} onChange={handleChange} required />
        </label><br />
        <label>As-tu déjà fait un stage ou un job ? Qu’en as-tu pensé ?<br />
          <input type="text" name="stage" value={form.stage} onChange={handleChange} required />
        </label><br />

        <h3>💡 3. Personnalité et traits comportementaux</h3>
        <label>Te considères-tu comme plutôt organisé(e) ou spontané(e) ?<br />
          <input type="text" name="organise" value={form.organise} onChange={handleChange} required />
        </label><br />
        <label>Prends-tu facilement des décisions ?<br />
          <input type="text" name="decision" value={form.decision} onChange={handleChange} required />
        </label><br />
        <label>Préfères-tu diriger un projet ou exécuter des consignes ?<br />
          <input type="text" name="dirigerOuExecuter" value={form.dirigerOuExecuter} onChange={handleChange} required />
        </label><br />
        <label>Comment réagis-tu face à un problème complexe ?<br />
          <input type="text" name="probleme" value={form.probleme} onChange={handleChange} required />
        </label><br />
        <label>Es-tu à l’aise avec le changement et la nouveauté ?<br />
          <input type="text" name="changement" value={form.changement} onChange={handleChange} required />
        </label><br />

        <h3>🌍 4. Valeurs et aspirations</h3>
        <label>Qu’est-ce qui est le plus important pour toi dans un futur métier ?<br />
          <input type="text" name="important" value={form.important} onChange={handleChange} required />
        </label><br />
        <label>Te vois-tu travailler dans un bureau, en extérieur, avec des gens, avec des machines… ?<br />
          <input type="text" name="lieu" value={form.lieu} onChange={handleChange} required />
        </label><br />
        <label>Quelle importance donnes-tu à l’équilibre vie professionnelle / vie personnelle ?<br />
          <input type="text" name="equilibre" value={form.equilibre} onChange={handleChange} required />
        </label><br />
        <label>Quel est ton rêve professionnel ?<br />
          <input type="text" name="reve" value={form.reve} onChange={handleChange} required />
        </label><br />
        <label>As-tu des modèles ou des personnes que tu admires pour leur parcours ?<br />
          <input type="text" name="modele" value={form.modele} onChange={handleChange} required />
        </label><br />

        <h3>📈 5. Projet d’avenir</h3>
        <label>As-tu déjà une idée du métier ou du domaine qui t’intéresse ?<br />
          <input type="text" name="ideeMetier" value={form.ideeMetier} onChange={handleChange} required />
        </label><br />
        <label>As-tu envisagé des études après le bac ? Lesquelles ?<br />
          <input type="text" name="etudes" value={form.etudes} onChange={handleChange} required />
        </label><br />
        <label>Es-tu déjà renseigné(e) sur les filières (pro, techno, générale, BTS, BUT, fac, prépa…) ?<br />
          <input type="text" name="filieres" value={form.filieres} onChange={handleChange} required />
        </label><br />

        <button type="submit" style={{ marginTop: '1rem' }}>Envoyer</button>
      </form>
    </div>
  );
}

export default OrientationTest;
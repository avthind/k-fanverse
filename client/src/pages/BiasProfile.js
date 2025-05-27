import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BiasProfile.css';

const ALL_GROUPS = [
  "BTS", "BLACKPINK", "TWICE", "LE SSERAFIM", "SEVENTEEN", "EXO", "IVE", "TXT", "NewJeans"
];

export default function BiasProfile() {
  const userId = "demo-user"; // Replace with real auth user ID later
  const [biases, setBiases] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    axios.get(`/api/users/${userId}/bias`)
      .then(res => setBiases(res.data.biases))
      .catch(err => console.error(err));
  }, []);

  const toggleBias = (group) => {
    if (biases.includes(group)) {
      setBiases(biases.filter(b => b !== group));
    } else {
      setBiases([...biases, group]);
    }
    setSaved(false);
  };

  const saveBiases = () => {
    axios.post(`/api/users/${userId}/bias`, { biases })
      .then(() => setSaved(true))
      .catch(err => console.error(err));
  };

  return (
    <div className="bias-container">
      <h2>🎤 Your Bias Profile</h2>
      <p>Select your favorite K-pop groups or idols:</p>
      <div className="group-grid">
        {ALL_GROUPS.map(group => (
          <button
            key={group}
            className={`group-button ${biases.includes(group) ? 'selected' : ''}`}
            onClick={() => toggleBias(group)}
          >
            {group}
          </button>
        ))}
      </div>
      <button onClick={saveBiases} className="save-button">💾 Save Biases</button>
      {saved && <p className="saved-msg">✅ Biases saved!</p>}
    </div>
  );
}

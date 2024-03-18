// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersIns = () => {
  const [inscrits, setInscrits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/inscrits');
        setInscrits(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des personnes inscrites :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des personnes inscrites :</h1>
      <ul>
        {inscrits.map((personne, index) => (
          <li key={index}>
            <p>Nom : {personne.name}</p>
            <p>Genre : {personne.genre}</p>
            <p>Téléphone : {personne.phone}</p>
            {/* Afficher d'autres informations de la personne inscrite si nécessaire */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersIns;

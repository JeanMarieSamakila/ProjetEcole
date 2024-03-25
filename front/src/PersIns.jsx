import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserBlock = ({ user }) => {
  return (
    <div className="border border-gray-300  w-[450px] ml-32 rounded-md p-4 mb-4">
      <h3 className='text-white font-semibold underline'>{user.name}</h3>
      <p className='text-white font-semibold'>Genre : {user.genre}</p>
      <p className='text-white font-semibold'>Téléphone : {user.phone}</p>
      <p className='text-white font-semibold'>Section : {user.section}</p>
      <p className='text-white font-semibold'>Option : {user.option}</p>
      <p className='text-white font-semibold'>Classe Sollicité : {user.classesollicite}</p>
      <p className='text-white font-semibold'>Ecole de provenance : {user.ecoleprovenance}</p>
      <p className='text-white font-semibold'>Classe Antertieur : {user.classeprovenance}</p>
      <p className='text-white font-semibold'>Pourcentage de la classe anterieur : {user.pourcentage}</p>
    </div>
  );
};


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
    <div className='bg-sky-950'>
      <h1 className='text-white font-semibold text-2xl mt-12 mb-5 ml-5'> Liste des élèves inscrites :</h1>
      {inscrits.map((personne, index) => (
        <UserBlock key={index} user={personne} />
      ))}
    </div>
  );
};

export default PersIns;

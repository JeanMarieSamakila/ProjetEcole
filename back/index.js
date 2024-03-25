const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(cors()); 
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Enregistrement de l'utilisateur dans la base de données PostgreSQL
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });
    // Réponse avec un code de statut HTTP 201 (Créé) et un message JSON
    res.status(201).json({ message: "Inscription réussie votre code est 2564", user: newUser });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    // Réponse avec un code de statut HTTP 500 (Erreur de serveur interne) et un message JSON
    res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
});
 
// Inscription des eleves

app.post('/inscription', async (req, res) => {
    const { name, genre, phone, section, option, classesollicite, classeprovenance, ecoleprovenance, pourcentage } = req.body;
  
    try {
      // Enregistrement de l'utilisateur dans la base de données PostgreSQL
      const newInscription = await prisma.inscription.create({
        data: {
          name,
          genre,
          phone,
          section,
          option,
          classesollicite,
          ecoleprovenance,
          classeprovenance,
          pourcentage
        }
      });
      // Réponse avec un code de statut HTTP 201 (Créé) et un message JSON
      res.status(201).json({ message: "Inscription réussie votre code est 2564", inscription: newInscription });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
      // Réponse avec un code de statut HTTP 500 (Erreur de serveur interne) et un message JSON
      res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
    }
  });
  app.get('/inscrits', async (req, res) => {
    try {
      const personnesInscrites = await prisma.inscription.findMany();
      res.json(personnesInscrites);
    } catch (error) {
      console.error('Erreur lors de la récupération des personnes inscrites :', error);
      res.status(500).json({ message: "Erreur lors de la récupération des personnes inscrites" });
    }
  });
  

app.listen(5000, () => {
  console.log('Serveur Express en cours d\'exécution sur le port 5000');
});
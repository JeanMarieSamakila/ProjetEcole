const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

app.use(cors()); 
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
  
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

  
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

   
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

  
    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
      },
      'votre_secret_jwt',
      { expiresIn: '1h' } 
    );

  
    res.status(200).json({ message: 'Connexion réussie.', token: token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
});





app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });
    
    res.status(201).json({ message: "Inscription réussie votre code est 2564", user: newUser });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
  
    res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
});
 
// Inscription des eleves

app.post('/inscription', async (req, res) => {
    const { name, genre, phone, section, option, classesollicite, classeprovenance, ecoleprovenance, pourcentage } = req.body;
  
    try {
  
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
      
      res.status(201).json({ message: "Inscription réussie votre code est 2564", inscription: newInscription });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
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
  

app.listen(3010, () => {
  console.log('Serveur Express en cours d\'exécution sur le port 3010');
});
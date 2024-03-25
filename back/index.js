const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(cors()); 
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Supposons que vous utilisez Prisma pour accéder à votre base de données

// Route de connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'utilisateur dans la base de données par e-mail
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    // Vérifier si l'utilisateur existe
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    // Vérifier si le mot de passe est correct
    
    if (!password) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    // Générer un jeton JWT avec l'ID utilisateur et l'e-mail
    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
      },
      'votre_secret_jwt', // Remplacez ceci par une clé secrète sécurisée
      { expiresIn: '1h' } // Facultatif : expiration du jeton
    );

    // Envoyer le token en réponse
    res.status(200).json({ message: 'Connexion réussie.', token: token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
});

app.use(express.json())

app.get('/', (req, res) => {

  const idToken = req.headers.authorization;
  jwt.verify(idToken, publickey, (err, decode) => {
      if(err) {
          res.status(401).send("Token invalide")
      } else {
          res.send(users)
      }
  } )

  console.log(idToken);
  res.send(users);

})

app.post('/auth', (req, res) => {
  const  { email, password } = req.body

  const valid = users.some(user => user.email === email && user.password === password)
  
  const token = jwt.sign({email}, privateKey, {algorithm: 'RS256'})
  
  if(valid) {
      res.send(token)
  } else {
      res.status(404).send("Pas trouvé")
  }
  
})





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

app.post('/event', async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const newEvent = await prisma.event.create({
      data: {
        title,
        date,
        description,
        image,
      },
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'événement :', error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'ajout de l\'événement.' });
  }
});
 


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
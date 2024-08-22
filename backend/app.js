const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')



/* On a créé un espace pour stocker une base de données sur mongoDB, ici on utilise mongoos
pour se connecter à notre base de donnée en lui passant en argument le chemin de la base de données */
mongoose.connect('mongodb+srv://cesarviennet:Kader1!Kader1!@cluster0.wvm4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

/* Ce code nous permet d'intercepter tout format .json qu'il soit déjà présent sur l'API
ou bien en cours d'envoie sous forme de requête */
app.use(express.json());




/* On crée les autorisations pour être aux normes CORS */
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });



app.use('/api/stuff', stuffRoutes)
app.use('api/auth', userRoutes)




module.exports = app;
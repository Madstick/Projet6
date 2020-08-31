
const express = require('express')
const bodyParser = require('body-parser') // Pour faciliter le traitement des données contenues dans le corp de la reqûete, le transformant en objet JSON
const mongoose = require('mongoose') // L'interface pour communiquer avec la base de données
const path = require ('path') // Pour le middleware express static qui permet d'acceder au chemin du système de fichier

const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user')

mongoose
  .connect('mongodb+srv://Madstick:projet6oc@cluster0.bvlkd.mongodb.net/Madstick?retryWrites=true&w=majority' ,
    { useNewUrlParser: true,
       useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use(bodyParser.json()) 

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/sauces', sauceRoutes)
app.use('/api/auth', userRoutes)

module.exports = app
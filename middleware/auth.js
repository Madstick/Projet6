const jwt = require('jsonwebtoken')
const config = require('../config/authconfig') // On récupère la clé pour le TOKEN

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] // On récupère le token dans l'entête
    const decodedToken = jwt.verify(token, config.token) // On vérifie le token avec la clé pour lire ce TOKEN
    const userId = decodedToken.userId // Le est  transformé en objet Javascript qu'on place dans une constante, et on y récupère l'user ID pour comparaison le cas échéant
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID non valable !'
    } else {
      next()
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).json({ error: error | 'Requête non authentifiée !' })
  }
}
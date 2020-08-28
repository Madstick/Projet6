const express = require('express')
const router = express.Router() 

const auth = require('../middleware/auth') // Récupère notre configuration d'authentification JsonWebToken
const multer = require ('../middleware/multerconfig') // Récupère notre configuration 'multer' pour traitement des fichiers images

const sauceCtrl = require('../controllers/sauce') // Récupère les logiques métiers à appliquer à chaque route du CRUD

router.post('/', auth, multer, sauceCtrl.createSauce) 
router.put('/:id', auth, multer, sauceCtrl.modifySauce)
router.delete('/:id', auth, sauceCtrl.deleteSauce)
router.get('/:id', auth, sauceCtrl.getOneSauce)
router.get('/', auth, sauceCtrl.getAllSauce)
router.post('/:id/like', auth, sauceCtrl.addLikeDislike)

module.exports = router
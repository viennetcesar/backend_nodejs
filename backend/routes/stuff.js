const express = require('express')
const router = express.Router()
const stuffCtrl = require('../controllers/stuff')


/* On n'a pas encore créé de base de données, tout ce qu'on peut faire c'est intercepter la requête 
mais pour celà normalement il faut qu'un statut de retour ait été créé, ici nous le créons de toute 
pièce pour que notre code puisse intercepter la requête sans difficulté */
router.post('/', stuffCtrl.createThing)
  
  
  
/* Le .put permet l'opération de modification */
router.put('/:id', stuffCtrl.modifyThing)


/* On implémente le delete */
router.delete('/:id', stuffCtrl.deleteThing)


router.get('/', stuffCtrl.getAllStuff)


router.get('/:id', stuffCtrl.getOneThing)


module.exports = router
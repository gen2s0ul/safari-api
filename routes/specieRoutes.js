const { Router } = require("express");
const specieController = require('../controllers/specieControllers')
const isAuthenticated = require("../middlewares/authMiddlewares")


//create router object
const router = Router()

//routes
router.get('/species', isAuthenticated, specieController.allSpecies)
router.post('/species', specieController.newSpecies)

router.get('/species/:id', specieController.getSpecies)
router.put('/species/update', specieController.updateSpecies)
router.delete('/species/:id', specieController.deleteSpecies)

module.exports = router


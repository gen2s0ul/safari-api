const { Router } = require("express")
const animalControllers =  require("../controllers/animalControllers")


//create router object 
const router = Router()

//routes
router.get("/animals", animalControllers.allanimals)

//add new animal
router.post('/animals', animalControllers.newAnimal)

//get  animal
 router.get("/animals/:id", animalControllers.singleAnimal)

//to update animal
router.put('/animals/update',  animalControllers.updateAnimal)

//to delete animal
router.delete('/animals/:id',  animalControllers.deleteAnimal)

//export router
module.exports = router
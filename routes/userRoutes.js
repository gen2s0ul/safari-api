const { Router } = require("express")
const userControllers = require("../controllers/userControllers")


const router = Router()

//routes
//add new user
router.post('/user/register', userControllers.register)

//login
router.post('/user/login', userControllers.login)

module.exports = router
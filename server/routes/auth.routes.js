const Router = require('express')
const router = new Router()
const authController = require('../controllers/auth.controllers')

router.post('/authData', authController.authorizationHandler)

module.exports = router

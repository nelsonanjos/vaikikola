const { Router } = require('express');

const LoginControl = require('../Controllers/LoginControl')

const routes = Router()

routes.post('/login', LoginControl.acessar) 

module.exports = routes
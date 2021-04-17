const { Router } = require('express');

const PessoaControl = require('../Controllers/PessoaControl')

const routes = Router()

routes.post('/pessoas/new', PessoaControl.create) 
routes.get('/pessoas', PessoaControl.read)
routes.get('/pessoas/byId/:id', PessoaControl.readById)
routes.post('/pessoas/edit/:id', PessoaControl.update) 
routes.delete('/pessoas/remove/:id', PessoaControl.delete) 

module.exports = routes
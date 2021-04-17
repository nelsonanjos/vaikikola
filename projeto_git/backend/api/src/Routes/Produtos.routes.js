const { Router } = require('express');

const ProdutoControl = require('../Controllers/ProdutoControl')

const routes = Router()

routes.post('/produtos/new', ProdutoControl.create) 
routes.get('/produtos', ProdutoControl.read)
routes.get('/produtos/byId/:id', ProdutoControl.readById)
routes.post('/produtos/edit/:id', ProdutoControl.update) 
routes.delete('/produtos/remove/:id', ProdutoControl.delete) 

module.exports = routes
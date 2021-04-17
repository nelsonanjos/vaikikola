const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    nome: {type: String},
    descricao: {type: String},
    estado: {type: String},
    proprietario: {type: String},
    publico: {type: String},
})

module.exports = mongoose.model('Produto', Schema)
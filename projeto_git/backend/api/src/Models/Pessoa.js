const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    telefone: {type: String},
    senha: {type: String},
    grupo: {type: String},
})

module.exports = mongoose.model('Pessoa', Schema)
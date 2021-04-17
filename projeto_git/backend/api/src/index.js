const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const routerPessoas = require('./Routes/Pessoas.routes')
const routerProdutos = require('./Routes/Produtos.routes')
const routerLogin = require('./Routes/Login.routes')


const app = express();

const dbUri = process.env.DB_URI

mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'));

app.use(cors())
app.use(express.json())
app.use(routerPessoas)
app.use(routerProdutos)
app.use(routerLogin)


app.listen(3333, () => console.log('Server running on port 3333'))
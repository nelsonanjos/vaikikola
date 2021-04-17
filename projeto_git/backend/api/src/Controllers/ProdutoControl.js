const Produto = require('../Models/Produto')

module.exports = {
   async create(req, res){

        const { nome, descricao, estado, proprietario, publico } = req.body

        try {
            const createdProduto = await Produto.create({
                nome: nome,
                descricao: descricao,
                estado: estado,
                proprietario: proprietario,
                publico: publico,

            })
            return res.status(200).send(createdProduto)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async read(req, res){
        try {
            const allProdutos = await Produto.find()

            return res.status(200).send(allProdutos)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async readById(req, res){
        const { id } = req.params
        
        try {
            const produtoById = await Produto.findById(id)

            return res.status(200).send(produtoById)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async update(req, res){

        const { nome, descricao, estado, proprietario, publico } = req.body
        const { id } = req.params

        try {
            const updateProduto = await Produto.findByIdAndUpdate(id, {
                nome,
                descricao,
                estado,
                proprietario,
                publico,
            })
            
            return res.status(201).send(updateProduto)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async delete(req, res){
        const { id } = req.params

        try {
            const deleteProduto = await Produto.findByIdAndDelete(id)
            
            return res.status(200).send({ status: "deleted", user: deleteProduto, message: "Apagado com sucesso!"})
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}
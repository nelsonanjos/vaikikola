const Pessoa = require('../Models/Pessoa')
// const bcrypt = require('bcrypt')

// async function hashPassword(pass){
//     try {
//         const salt = await bcrypt.genSalt(10)
//         const encryptedPass = await bcrypt.hash(pass, salt)
//         return encryptedPass
//     } catch (err) {
//         return err
//     }
// }

module.exports = {
   async create(req, res){

        const { nome, email, telefone, senha, grupo } = req.body

        try {
            const pessoaJaExiste = await Pessoa.findOne({ email })
            const telJaExiste = await Pessoa.findOne( { telefone })
            if(pessoaJaExiste) return res.status(201).send({ message: 'Este e-mail já esta cadastrado!\nTente outro.'})
            if(telJaExiste) return res.status(201).send({ message: 'Este telefone já foi cadastrado!\nTente outro.'})

            // const hashedPass = hashPassword(senha)

            const createdPessoa = await Pessoa.create({
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
                grupo: grupo,
                // senha: hashedPass,
            })
            return res.status(201).send({message: "Cadastrado com sucesso!"})
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async read(req, res){
        try {
            const allPessoas = await Pessoa.find()

            return res.status(200).send(allPessoas)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async readById(req, res){
        const { id } = req.params
        
        try {
            const pessoaById = await Pessoa.findById(id)

            return res.status(200).send(pessoaById)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async update(req, res){

        // const { id } = req.params;
        const { nome, email, telefone, senha, grupo } = req.body
        const { id } = req.params

        // const hashedPass = hashPassword(senha)

        try {
            const updatePessoa = await Pessoa.findByIdAndUpdate(id, {
                nome,
                email,
                telefone,
                senha,
                grupo,
                // senha: hashedPass,
            })
            
            return res.status(201).send(updatePessoa)
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async delete(req, res){
        const { id } = req.params

        try {
            const deletePessoa = await Pessoa.findByIdAndDelete(id)
            
            return res.status(200).send({ status: "deleted", user: deletePessoa })
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}
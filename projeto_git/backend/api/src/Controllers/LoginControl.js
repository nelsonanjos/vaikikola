const Pessoa = require('../Models/Pessoa')

module.exports = {
   async acessar(req, res){

        const { email, senha } = req.body

        try {
            const emailEncontrado = await Pessoa.findOne({ email })
           
            if( emailEncontrado ){
                if( emailEncontrado.senha == senha ){
                    return res.status(201).send({pessoa: emailEncontrado, acesso: true})
                } else {
                    return res.status(201).send(false)
                }
            } else {
                return res.status(201).send(false)
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    },
}
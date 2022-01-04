const bookshopService = require('../services/bookServices')

class bookshopController {
    async index (req, res) {

    }
    async create (req, res) {
        var {name, author, description, price} = req.body
        var status = await bookshopService.Create(name, author, description, price)
        if(status) {
            res.statusCode = 200
            res.json({name: req.body.name})

            return
        } else {
            res.sendStatus(400)
        }

    } 
    async findAll (req, res) {
        var books = await bookshopService.ReadAll()
        console.log(books.length)

        if(books.length > 1) {
            res.status(200).json(books)
            return

        } else {
            res.status(400).json({err: "Sem dados"})
            return

        }      

    }
    async update (req, res) {
        var id = req.params.id
        var {name, author, description, price} = req.body
      var result = await bookshopService.Update(name, author, description, price, id)

      if(result) {
          res.status(200).json({msg: "Dados Atualizados"})
      } else {
          res.status(400).json({msg: "Houveram erros !!"})
      }


    }


    async findOne (req, res) {
        var id = req.params.id
        var status = await bookshopService.ReadOne(id)
        console.log(status)
        if(status != undefined) {
            res.status(200).json(status)
        } else {
            res.status(404).json({err: "O id do usuário não existe"})
        }
    }

    async delete (req, res) {
        var id = req.params.id
        var result = await bookshopService.ReadOne(id)     

        if(result != undefined) {
            await bookshopService.Delete(id)
            return res.json({id})

        } else {
            res.status(400).json({error: "Dados inválidos"})
            return
        }
        


    }

}

module.exports = new bookshopController()
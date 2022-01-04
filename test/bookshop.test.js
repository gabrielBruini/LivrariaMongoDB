const app = require("../src/app")
const supertest = require('supertest')
let request = supertest(app)
const mongoose = require('mongoose')

var book = {
    name: "Castelos e Ruínas",
    author: "BK",
    description: "Melhor albúm já criado",
    price: 0

}



describe("cadastro de livros", () => {

    test("Deve cadastrar um livro", () => {
       
        return request.post("/create").send(book)
        .then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.name).toEqual(book.name)
        })

    })
    test("Deve retornar a lista de livros", () => {
        return request.get("/books").then(res => {
            expect(res.statusCode).toEqual(200)
            expect()

        })
    })

    test("Deve deletar um livro",() => {    
        var id = "5"   // é necessário atualizar o id do usuário a cada teste
        return request
        .delete(`/books/${id}`)
              
        .then(res => {           
            expect(res.body.id).toEqual(id)
        }).catch(err => {
            throw Error
            
        })
    })
    test("Deve atualizar os dados do livro", () => {
        var book = {
            name: "Ruínas entre Castelos",
            author: "Burguer King",
            description: "Cópia barata, prefiro o BK",
            price: 35        
        }

        return request.put("/books/6")
        .send(book)
        .then(res => {
           expect(res.statusCode).toEqual(200)
           expect(res.body.msg).toEqual("Dados Atualizados") 
        }).catch (err => {
            throw Error
        })
    })

   
})


afterAll( async () => {
    await mongoose.disconnect()
    return
  
})
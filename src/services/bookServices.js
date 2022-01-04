const bookModel = require('../models/book')
const mongoose = require('mongoose')


const bookshop = new mongoose.model("books", bookModel)

class BookService {
    async Create(name, author, description, price) {
        var newbook = new bookshop({
            name, author, description, price
        })
        try {
            await newbook.save()
            return true

        } catch (err) {

            console.log(err)
            return false
        }

    }
    async ReadAll () {
      var result =  await bookshop.find()
      return result
    }
    async ReadOne(id) {
        try {
           
            var book = await bookshop.findById(id)    
                return book                      

        } catch (err) {
            console.log(err)

        }
        
    }
    async Update(name, author, description, price, id) {
        var bookexist = await this.ReadOne(id)

        if(bookexist != undefined ) {
            var update = await bookshop.findByIdAndUpdate(id, {name, author, description, price})

            return update
        }

        

    }
    async Delete(id){       
        try {
            var exist = await this.ReadOne(id) 
            console.log(exist)
            
            
            if(exist != undefined) {
                var bookdelete = await bookshop.deleteOne({"_id": id})                
                return bookdelete

            } else {
                return undefined

            }

           


        } catch (err) {

        }
    }
   
}
module.exports = new BookService ()
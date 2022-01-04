const express = require('express')
const app = express()
const routers = require('./routes/routes')
const mongoose = require('mongoose')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/bookshop")
.then(() => {
    //console.log("Conectado no banco de dados")
    
}).catch(err => {
    console.log(err)
})


app.use('/', routers)

app.listen(8000, () => console.log("Servidor no Ar"))

module.exports = app
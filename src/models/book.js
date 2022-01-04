const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)



const book = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    price: Number,
    _id: Number
}, { _id: false})
book.plugin(AutoIncrement);

module.exports = book
const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookshop')

router.get('/', controller.index)
router.post('/create', controller.create)
router.get("/book/:id", controller.findOne)
router.get("/books", controller.findAll)
router.delete("/books/:id", controller.delete)
router.put("/books/:id", controller.update)


module.exports = router
var express = require('express')
var router = express.Router()
const path = require('path')

const category = require("../app/controller/categoryController")

router.get('/tableType', category.findAllTableType)
router.get('/', category.findAllTypeDesign)
router.get('/:id', category.findFormByTypeDesign)





module.exports = router 
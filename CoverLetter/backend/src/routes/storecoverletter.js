var express = require('express')
var router = express.Router()

const storeCL = require("../app/controller/storeCLController")

const multer = require('multer');
const upload = multer({ dest: './src/public/uploads/' })

router.get('/', storeCL.findAll)
router.get('/Preview/:id', storeCL.findCLById)
router.put('/Edit/:id', upload.single('avatarEdit'), storeCL.updateCLById)
router.delete('/:id', storeCL.deleteById)





module.exports = router 
var express = require('express')
var router = express.Router()

const coverletter = require("../app/controller/coverletterController")
const multer = require('multer');
const upload = multer({ dest: './src/public/uploads/' })

router.get('/', coverletter.findAll)
router.get('/create/:id', coverletter.create)
router.put('/create/:id', upload.single('avatar'), coverletter.createCL)
// router.post('/', upload.single('image'), products.create)





module.exports = router 
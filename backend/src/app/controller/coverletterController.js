const coverletterService = require('../service/coverletterService')
const storeCLService = require('../service/storeCLService')


class coverletter {
    async findAll(req, res) {
        try {
            let data = await coverletterService.findAll()
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }

    }

    async arrangeByMostUsed(req, res) {
        try {
            let data = await coverletterService.arrangeByMostUsed()
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }

    }

    async create(req, res) {
        let id = req.params.id
        if (id) {
            const data = await coverletterService.create(id);
            res.json(data.rows)
        } else {
            res.json('Thất bại')
        }
    }

    async createCL(req, res) {
        let id = req.params.id
        let item = req.body

        if(req.file){
            const updateForm = await coverletterService.updateFormImg(req.file.filename, id);
            
            const newHTML = item.htmlBody.replace('c3a1f6a82426f23d9d2954da86b11cca', `${req.file.filename}`)
            await storeCLService.createNew(item.img, item.titleCV, newHTML, item.idForm, req.file.filename)
          }else {
            item.htmlBody = item.htmlBody.replace('c3a1f6a82426f23d9d2954da86b11cca', `${item.avatarImg}`)
            await storeCLService.createNew(item.img, item.titleCV, item.htmlBody, item.idForm, item.avatarImg)
          }
        
          if (item) {
            const data = await coverletterService.updateForm(item, id);
        
            res.json(item)
          }else {
            res.json('Thất bại')
    }
}

}

module.exports = new coverletter()
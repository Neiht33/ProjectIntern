const storeCLService = require('../service/storeCLService')


class storeCL {
    async findAll(req, res) {
        try {
            let data = await storeCLService.findAll()
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }

    }

    async findCLById(req, res) {
        let id = req.params.id
        try {
            let data = await storeCLService.findCLById(id)
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }

    }

    async updateCLById(req, res) {
        let id = req.params.id
        const item = req.body
        const avatarCurrent = await storeCLService.findAvatarById(id)

        if(req.file){
            const data = await storeCLService.updateAvatarById(req.file.filename, id);
            item.htmlBody = item.htmlBody.replace('c3a1f6a82426f23d9d2954da86b11cca', `${req.file.filename}`)
        }else {
            item.htmlBody = item.htmlBody.replace('c3a1f6a82426f23d9d2954da86b11cca', `${avatarCurrent.rows[0].avatar}`)
        }

        const data = await storeCLService.updateCLById(item, id);
        console.log(data);
        res.json(data.rows)
    }

    async deleteById(req, res) {
        let id = req.params.id
        if (id) {
            const data = await storeCLService.deleteById(id);
            console.log(data);
            res.json(data.rows)
          }else res.json('Xóa thất bại')
    }

}

module.exports = new storeCL()
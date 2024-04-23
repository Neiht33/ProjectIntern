const categoryService = require('../service/categoryService')


class category {
    async findAllTableType(req, res) {
        try {
            let data = await categoryService.findAllTableType()
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu' });
        }
    }

    async findAllTypeDesign(req, res) {
        try {
            let data = await categoryService.findAllTypeDesign()
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu' });
        }
    }

    async findFormByTypeDesign(req, res) {
        let id = req.params.id
        try {
            let data = await categoryService.findFormByIDType(id)
            res.json(data.rows)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu' });
        }
    }

}

module.exports = new category()
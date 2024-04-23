const pool = require('../configdb/connectDB');

class categoryService {

    findAllTableType() {
        return new Promise((resolve, reject) => {
            pool.query('select * from "tableTypeForm"', function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findAllTypeDesign() {
        return new Promise((resolve, reject) => {
            pool.query('select * from public."typeDesignCL"', function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findFormByIDType(id) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from "tableTypeForm" t
            inner join "formCL" f on f.id = t."idFormCL"
            where "idTypeDesign" = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

}

module.exports = new categoryService()
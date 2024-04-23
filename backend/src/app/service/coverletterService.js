const pool = require('../configdb/connectDB');

class coverletterService {

    findAll() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * from "formCL"', function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    create(id) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * from "formCL" f where f.id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    updateFormImg(filename, id) {
        return new Promise((resolve, reject) => {
            pool.query(`UPDATE "formCL" f
            SET avatar = '${filename}'
            WHERE f.id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    updateForm(item, id) {
        return new Promise((resolve, reject) => {
            pool.query(`UPDATE "formCL" f
            SET 
                "titleCV" = '${item.titleCV}',
                name = '${item.name}',
                title = '${item.title}',
                phone = '${item.phone}',
                gmail = '${item.gmail}',
                address = '${item.address}',
                "receiverFullname" = '${item.receiverFullname}',
                "receiverTitle" = '${item.receiverTitle}',
                "receiverCompany" = '${item.receiverCompany}',
                "receiverAddress" = '${item.receiverAddress}',
                "contentDate" = '${item.contentDate}',
                "contentSubject" = '${item.contentSubject}',
                "contentBody" = '${item.contentBody}'
            WHERE f.id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

}

module.exports = new coverletterService()
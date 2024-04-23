const pool = require('../configdb/connectDB');

class storeCLService {
    
    createNew(img, titleCV, newHTML, idForm, filename) {
        return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO "storeCL"("imgForm", "titleCV", "htmlBody", "idForm", avatar) values ('${img}', '${titleCV}', '${newHTML}', ${idForm}, '${filename}')`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }
    
    findAll() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * from "storeCL" order by "dateSave" desc', function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findCLById(id) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * from "storeCL" s where s.id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findAvatarById(id) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT avatar FROM "storeCL" where id=${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    updateAvatarById(filename, id) {
        return new Promise((resolve, reject) => {
            pool.query(`UPDATE "storeCL" s
            SET avatar = '${filename}'
            WHERE s.id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    updateCLById(item, id) {
        return new Promise((resolve, reject) => {
            pool.query(`UPDATE "storeCL" SET "titleCV" = '${item.titleCV}', "htmlBody" = '${item.htmlBody}' where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    deleteById(id) {
        return new Promise((resolve, reject) => {
            pool.query(`delete from "storeCL" where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

}

module.exports = new storeCLService()
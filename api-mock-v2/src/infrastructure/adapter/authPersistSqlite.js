const db = require('../../../database/config');
const { createUser } = require('../../domain/services/user');

class AuthPersist {
    get(email) {
        const sql = "select * from user where email = ?";
        const params = [email];
        return new Promise((resolve, reject) => {
            db.get(sql, params, (err, row) => {
                if (err) {
                    reject(err.message);
                } else if (!row) {
                    reject(null);
                }
                else {
                    resolve(createUser(row));
                }
            });
        });
    }

}

module.exports = AuthPersist;
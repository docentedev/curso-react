const db = require('../../../database/config');
const { createUserListPublic, createUser, createUserPublic, createUserIdOnly } = require('../../domain/services/user');

class UserPersist {
    save(user) {
        var sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
        var params = [user.name, user.email, user.password]
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err, result) {
                if (err) {
                    reject(err.message);
                } else {
                    const userCreate = createUser(user);
                    userCreate.setId(this.lastID);
                    resolve(userCreate);
                }
            });
        });
    }

    update(user) {
        const params = [user.name, user.email, user.password, user.id];
        const sql = `UPDATE user set 
        name = coalesce(?,name), 
        email = COALESCE(?,email), 
        password = coalesce(?,password) 
        WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(user);
                }
            });
        });
    }

    getAll() {
        const sql = "select * from user";
        const params = [];
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(createUserListPublic(rows));
                }
            });
        });
    }

    get(id) {
        const sql = "select * from user where id = ?";
        const params = [id];
        return new Promise((resolve, reject) => {
            db.get(sql, params, (err, row) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(createUserPublic(row));
                }
            });
        });
    }

    delete(id) {
        const sql = 'DELETE FROM user WHERE id = ?';
        const params = [id];
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err, row) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve({
                        result: this.changes,
                        user: createUserIdOnly({ id }),
                    });
                }
            });
        });
    }
}

module.exports = UserPersist;
const db = require('../../../database/config');
const { createPostListPublic, createPost, createPostPublic, createPostIdOnly } = require('../../domain/services/post');

class PostPersist {
    save(post) {
        var sql = 'INSERT INTO post (title, description, image_url) VALUES (?,?,?)'
        var params = [post.title, post.description, post.image_url]
        return new Promise((resolve, reject) => {
            db.run(sql, params, function(err, result) {
                if (err) {
                    reject(err.message);
                } else {
                    const postCreate = createPost(post);
                    postCreate.setId(this.lastID);
                    resolve(postCreate);
                }
            });
        });
    }

    update(post) {
        const params = [post.title, post.description, post.image_url, post.id];
        const sql = `UPDATE post set 
        title = coalesce(?,title), 
        description = COALESCE(?,description), 
        image_url = coalesce(?,image_url) 
        WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(post);
                }
            });
        });
    }

    getAll() {
        const sql = "select * from post";
        const params = [];
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(createPostListPublic(rows));
                }
            });
        });
    }

    get(id) {
        const sql = "select * from post where id = ?";
        const params = [id];
        return new Promise((resolve, reject) => {
            db.get(sql, params, (err, row) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(createPostPublic(row));
                }
            });
        });
    }

    delete(id) {
        const sql = 'DELETE FROM post WHERE id = ?';
        const params = [id];
        return new Promise((resolve, reject) => {
            db.run(sql, params, function(err, row) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve({
                        result: this.changes,
                        post: createPostIdOnly({ id }),
                    });
                }
            });
        });
    }
}

module.exports = PostPersist;
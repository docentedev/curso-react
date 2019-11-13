const PostPersistSqlite = require('../adapter/postPersistSqlite');

class PostPersist {

    constructor() {
        this.client = new PostPersistSqlite();
    }

    async save(post) {
        return await this.client.save(post);
    }

    async delete(id) {
        return await this.client.delete(id);
    }

    async update(post) {
        return await this.client.update(post);
    }

    async getAll() {
        return await this.client.getAll();
    }

    async get(post) {
        return await this.client.get(post);
    }
}

module.exports = PostPersist;
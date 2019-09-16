const UserPersistSqlite = require('../adapter/userPersistSqlite');

class UserPersist {

    constructor() {
        this.client = new UserPersistSqlite();
    }

    async save(user) {
        return await this.client.save(user);
    }
    
    async delete(id) {
        return await this.client.delete(id);
    }

    async update(user) {
        return await this.client.update(user);
    }

    async getAll() {
        return await this.client.getAll();
    }

    async get(user) {
        return await this.client.get(user);
    }
}

module.exports = UserPersist;
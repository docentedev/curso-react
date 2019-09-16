const AuthPersistSqlite = require('../adapter/authPersistSqlite');

class AuthPersist {

    constructor() {
        this.client = new AuthPersistSqlite();
    }

    async get(email) {
        return await this.client.get(email);
    }
}

module.exports = AuthPersist;
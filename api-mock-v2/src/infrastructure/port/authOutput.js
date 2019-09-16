const AuthOutputHTTP = require('../adapter/authOutputHTTP');

class AuthOutput {
    constructor(app) {
        this.authOutput = new AuthOutputHTTP(app);
    }

    login() {
        this.authOutput.login();
    }

    init() {
        this.login();
    }
}

module.exports = AuthOutput;
const AuthController = require('../../application/use-case/authController');

class AuthOutputHTTP {
    constructor(app) {
        this.app = app;
        this.authController = new AuthController();
    }

    login() {
        this.app.post('/login', this.authController.login);
    }
}

module.exports = AuthOutputHTTP;
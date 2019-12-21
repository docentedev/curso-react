const UserController = require('../../application/use-case/userController');
const { ensureToken } = require('../../utils/middleware');

class UserOutputHTTP {
    constructor(app) {
        this.app = app;
        this.userController = new UserController();
    }

    getAll() {
        // para proteger agregar ensureToken
        this.app.get('/api/user', ensureToken, this.userController.getAll);
    }

    get() {
        this.app.get('/api/user/:id', ensureToken, this.userController.get);
    }

    delete() {
        this.app.delete('/api/user/:id', ensureToken, this.userController.delete);
    }

    save() {
        this.app.post('/api/user', this.userController.save);
    }

    update() {
        this.app.patch('/api/user/:id', ensureToken, this.userController.update);
    }
}

module.exports = UserOutputHTTP;
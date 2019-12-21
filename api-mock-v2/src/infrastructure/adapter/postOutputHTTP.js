const PostController = require('../../application/use-case/postController');
const { ensureToken } = require('../../utils/middleware');

class PostOutputHTTP {
    constructor(app) {
        this.app = app;
        this.postController = new PostController();
    }

    getAll() {
        // para proteger agregar ensureToken
        this.app.get('/api/post', this.postController.getAll);
    }

    get() {
        this.app.get('/api/post/:id', this.postController.get);
    }

    delete() {
        this.app.delete('/api/post/:id', this.postController.delete);
    }

    save() {
        this.app.post('/api/post', this.postController.save);
    }

    update() {
        this.app.patch('/api/post/:id', this.postController.update);
    }
}

module.exports = PostOutputHTTP;
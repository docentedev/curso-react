const PostPersist = require('../../infrastructure/port/postPersist');
const { getRequestParam, makePostByRequestBody } = require('../../utils/http');
const Encrypt = require('../../infrastructure/port/encrypt');


class PostController {

    constructor() {
        this.postPersist = new PostPersist();
        this.encrypt = new Encrypt();
    }

    getAll = (req, res, next) => {
        const p = this.postPersist.getAll();
        p.then(posts => res.json({ message: 'success', data: posts }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    get = (req, res, next) => {
        const id = getRequestParam('id', req);
        const p = this.postPersist.get(id);
        p.then(post => res.json({ message: 'success', data: post }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    delete = (req, res, next) => {
        const id = getRequestParam('id', req);
        const p = this.postPersist.delete(id);
        p.then(post => res.json({ message: 'delete', data: post }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    save = (req, res, next) => {
        const newPost = makePostByRequestBody(req.body);
        const p = this.encrypt.passwordCreate(newPost.password);
        const errors = [];

        if (!newPost.password) errors.push('No password specified');
        if (!newPost.email) errors.push('No email specified');
        if (errors.length) {
            res.status(400).json({ error: errors.join(",") });
            return;
        }

        p.then(hash => {
            newPost.password = hash;
            const pSave = this.postPersist.save(newPost);
            pSave.then(post => res.json({ message: 'success', data: post }));
            pSave.catch(err => res.status(400).json({ error: err }));
        }).catch(err => res.status(400).json({ error: err }));
    }

    update = (req, res, next) => {
        const updatePost = makePostByRequestBody(req.body);
        const id = getRequestParam('id', req);
        const p = this.encrypt.passwordCreate(updatePost.password);

        p.then(hash => {
            updatePost.setId(id);
            updatePost.password = hash;
            const pUpdate = this.postPersist.update(updatePost);
            pUpdate.then(post => res.json({ message: 'success', data: post }));
            pUpdate.catch(err => res.status(400).json({ error: err }));
        }).catch(err => res.status(400).json({ error: err }));

    }
}

module.exports = PostController;
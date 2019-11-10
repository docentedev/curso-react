const UserPersist = require('../../infrastructure/port/userPersist');
const { getRequestParam, makeUserByRequestBody } = require('../../utils/http');
const Encrypt = require('../../infrastructure/port/encrypt');


class UserController {

    constructor() {
        this.userPersist = new UserPersist();
        this.encrypt = new Encrypt();
    }

    getAll = (req, res, next) => {
        const p = this.userPersist.getAll();
        p.then(users => res.json({ message: 'success', data: users }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    get = (req, res, next) => {
        const id = getRequestParam('id', req);
        const p = this.userPersist.get(id);
        p.then(user => res.json({ message: 'success', data: user }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    delete = (req, res, next) => {
        const id = getRequestParam('id', req);
        const p = this.userPersist.delete(id);
        p.then(user => res.json({ message: 'delete', data: user }));
        p.catch(err => res.status(400).json({ error: err }));
    }

    save = (req, res, next) => {
        const newUser = makeUserByRequestBody(req.body);
        const p = this.encrypt.passwordCreate(newUser.password);
        const errors = [];

        if (!newUser.password) errors.push('No password specified');
        if (!newUser.email) errors.push('No email specified');
        if (errors.length) {
            res.status(400).json({ error: errors.join(",") });
            return;
        }

        p.then(hash => {
            newUser.password = hash;
            const pSave = this.userPersist.save(newUser);
            pSave.then(user => res.json({ message: 'success', data: user }));
            pSave.catch(err => res.status(400).json({ error: err }));
        }).catch(err => res.status(400).json({ error: err }));
    }

    update = (req, res, next) => {
        const updateUser = makeUserByRequestBody(req.body);
        const id = getRequestParam('id', req);
        const p = this.encrypt.passwordCreate(updateUser.password);

        p.then(hash => {
            updateUser.setId(id);
            updateUser.password = hash;
            const pUpdate = this.userPersist.update(updateUser);
            pUpdate.then(user => res.json({ message: 'success', data: user }));
            pUpdate.catch(err => res.status(400).json({ error: err }));
        }).catch(err => res.status(400).json({ error: err }));

    }
}

module.exports = UserController;
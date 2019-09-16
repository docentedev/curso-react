const AuthPersist = require('../../infrastructure/port/authPersist');
const { getBodyParam } = require('../../utils/http');
const Encrypt = require('../../infrastructure/port/encrypt');


class UserController {

    constructor() {
        this.authPersist = new AuthPersist();
        this.encrypt = new Encrypt();
    }

    login = (req, res, next) => {
        const email = getBodyParam('email', req.body, true);
        const password = getBodyParam('password', req.body, true);
        const p = this.authPersist.get(email);

        const successGetUser = async user => {
            const passwordValid = await this.encrypt.passwordValidate(password, user.password);
            if(passwordValid) {
                const token = await this.encrypt.jwtSing(user.username);
                res.json({ message: 'success', data: token });
            } else {
                res.status(403).json({ error: 'Not authorized' })
            }
        }

        p.then(successGetUser);
        p.catch(err => res.status(400).json({ error: err }));
    }

}

module.exports = UserController;
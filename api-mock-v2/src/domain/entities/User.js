const { emailValidation } = require('../services/validations');


class User {

    id = 0;
    email = '';
    validations = [];

    constructor(id, name, email, password) {
        this.setId(id);
        this.name = name;
        this.setEmail(email);
        this.password = password ? password : undefined;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = Number.parseInt(id);
    }

    getEmail() {
        return this.email;
    }

    setEmail = (email) => {
        if(email && !emailValidation(email)) {
            this.validations.push({ email: 'invalid' });
        }
        this.email = email;
    }
}

module.exports = User;
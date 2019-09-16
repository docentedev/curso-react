const EncryptCrypto = require('../adapter/encryptCrypto');

class Encrypt {
    constructor() {
        this.encrypt = new EncryptCrypto();
    }

    jwtSing(username) {
        return new Promise((resolve, reject) => {
            this.encrypt.jwtSing(username, (err, token) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            })
        });
    }

    jwtValidate(data) {

    }

    passwordCreate = async (password) => {
        return await this.encrypt.passwordCreate(password);
    }

    passwordValidate = async (password, hash) => {
        return await this.encrypt.passwordValidate(password, hash);
    }
}

module.exports = Encrypt;
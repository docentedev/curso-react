const fs = require('fs')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const privateKey = fs.readFileSync('./keys/jwtRS256.key');

class EncryptCrypto {

    jwtSing = (username, callback) => {
        jwt.sign(
            {
                username: username,
            },
            privateKey,
            {
                algorithm: 'RS256',
                expiresIn: '1h',
            },
            callback,
        );
    }

    jwtValidate(data) {
        return true;
    }

    passwordCreate = async (password) => {
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    passwordValidate = async (password, hash) => {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = EncryptCrypto;
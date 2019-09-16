const fs = require('fs')
const jwt = require('jsonwebtoken')

const publicKey = fs.readFileSync('./keys/jwtRS256.key.pub');

module.exports.ensureToken = (req, res, next) => {
    var bearerHeader = req.headers["authorization"]
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        jwt.verify(bearerToken, publicKey, (err, result) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403)
    }
};
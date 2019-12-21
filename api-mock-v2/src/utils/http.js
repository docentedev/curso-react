const User = require('../domain/entities/User');

module.exports.getRequestParam = (param, request) => request.params[param];

module.exports.getBodyParam = (param, body, generateError = false) => {
    const value = body[param];
    if (value) {
        return value;
    }
    throw new Error(`[${param}] is required`);
};

module.exports.makeUserByRequestBody = (body) => {
    return new User(
        body.id,
        body.name,
        body.email,
        body.password
    );
};

module.exports.makePostByRequestBody = (body) => {
    return body;
};
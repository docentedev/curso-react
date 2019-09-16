const User = require('../entities/User');

const createUserIdOnly = (u = {}) => new User(u.id, null, null, null);
const createUser = (u = {}) => new User(u.id, u.name, u.email, u.password);
const createUserList = (data = []) => data.map(createUser);

const createUserPublic = (u = {}) => new User(u.id, u.name, u.email, null);
const createUserListPublic = (data = []) => data.map(createUserPublic);

module.exports.createUserIdOnly = createUserIdOnly;
module.exports.createUser = createUser;
module.exports.createUserList = createUserList;
module.exports.createUserPublic = createUserPublic;
module.exports.createUserListPublic = createUserListPublic;
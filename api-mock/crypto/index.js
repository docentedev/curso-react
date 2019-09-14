const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'admin1234';
const someOtherPlaintextPassword = 'not_bacon';


const encryptPassword =  async (password) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const comparePasswordHash = async (password, hash) => await bcrypt.compare(password, hash);

/*
async function checkUser(username, password) {
    //... fetch user from a db etc.
 
    const match = await bcrypt.compare(password, user.passwordHash);
 
    if(match) {
        //login
    }
 
    //...
}
*/

module.exports = {
    encryptPassword: encryptPassword,
    comparePasswordHash: comparePasswordHash,
};
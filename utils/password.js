const bcrypt = require('bcryptjs');

async function hashPassword(password){
    return await bcrypt.hash(password,10);
}

async function comparePassword(password1,password2){
    return await bcrypt.compare(password1,password2);
}

module.exports = {
    hashPassword,
    comparePassword
}
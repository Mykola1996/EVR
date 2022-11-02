const bcrypt = require('bcrypt');

module.exports = {
    hashPassword: (password) => bcrypt.hash(password, 10),
    comparePasswords: (password, hashPasword) => bcrypt.compare(pasword, hashPasword)
}
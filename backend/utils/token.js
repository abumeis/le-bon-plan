const jwt = require('jsonwebtoken');
const jwtsecret = "unsecretbĂȘte";

function generateToken(username) {
    return jwt.sign({username}, jwtsecret, {
        expiresIn: 3600
    });
}

function verifyToken(token) {
    return jwt.verify(token, jwtsecret);
}

module.exports = {
    generateToken,
    verifyToken
}
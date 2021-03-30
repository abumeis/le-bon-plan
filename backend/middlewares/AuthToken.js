const UserModel = require('../models/User');
const { verifyToken } = require('../utils/token');

module.exports = async (req, res, next) => {
    const simpleToken = req.headers.authorization.split(" ")[1];
    const decodedToken = verifyToken(simpleToken)
    const user = await UserModel.findOne({
        username: decodedToken.username
    })
    
    if (user) {
        req.toto = user;
        next()
    } else {
        res.status(400).send(err)
    }
}
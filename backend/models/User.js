const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    
    profilePicture: String
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
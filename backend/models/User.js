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

//Product schema

const productSchema = new mongoose.Schema({
    creator: { 
        type: mongoose.Types.ObjectId,
        ref: 'User'
      },
    name: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
   
    productPicture: String
});
const ProductModel = mongoose.model('Product', productSchema);

module.exports = UserModel;
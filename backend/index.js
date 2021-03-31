const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/User");
const ProductModel = require("./models/Product");
const {generateToken} = require('./utils/token')
const checkAuth = require ('./middlewares/AuthToken')
const multer = require("multer");

app.use(express.json());
app.use(cors())


mongoose.connect('mongodb://localhost:27017/lebonplan',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("db connect........");
    });




app.post('/signup', async (req, res) => {
   
    console.log(req.body)
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        surname: req.body.surname,
        profilePicture: req.body.profilePicture,
        //`/userPic/${req.body.surname}.png`
    })
    try {
        const saveUser = await user.save()
        const token = generateToken(user.username)
        res.send({token}).json(saveUser)

    } catch (err) {
        res.json({ message: err })
    }
})




app.post('/login', async (req, res) => {
    try{
        const body = req.body
        const user = await UserModel.findOne({
            username: body.username
        })
        if (!user) {
            return res.status(404).send("The user was not found")
        }
        if (user.password !== body.password) {
            return res.status(404).json({
            isConnected: false
        })
        }
        const token = generateToken(user.username);
        return res.json({
            token,
            isConnected: true
        })
    } catch (err) {
        console.error(err)
        res.status(404).json({
            isConnected: false
        })
    }
})

    // const user = new UserModel({
    //     username: req.body.username,
    //     password: req.body.password,
    // })
    // try {
    //     const findUser = await user.findOne()
    //     res.json(findUser)

    // } catch (err) {
    //     res.json({ message: err })
    // }


app.get('/admin', checkAuth, async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.json(users)

    }  catch (err) {
        console.error(err)
        res.status(403).json({
            isConnected: false
        })
    }
})

app.post('/product', async (req, res) => {
    const product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        Description: req.body.Description,
        productPicture: req.body.productPicture
    })
    try {
        const products = await product.save()
        res.json(products)

    } catch (err) {
        res.json({ message: err })
    }
})


app.listen(port, () => {
    console.log("server launch")
});

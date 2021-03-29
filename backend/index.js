const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/User");


app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/lebonplan',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("db connect........");
    });

app.post('/signup', async (req, res) => {
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        surname: req.body.surname,
        profilePicture: req.body.profilePicture
    })
    try {
        const saveUser = await user.save()
        res.json(saveUser)

    } catch (err) {
        res.json({ message: err })
    }
})

app.get('/admin', async (req, res) => {
    try {
        const users = await UserModel.find()
        res.json(users)

    } catch (err) {
        res.json({ message: err })
    }
})


app.listen(port);

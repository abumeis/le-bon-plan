const express = require('express')
const router = express.Router();

router.post('/signup', async (req, res) => {
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

router.post('/login', async (req, res) => {
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
    })
    try {
        const findUser = await user.findOne()
        res.json(findUser)

    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/profil', async (req, res) => {
    try {
        const users = await UserModel.find()
        res.json(users)

    } catch (err) {
        res.json({ message: err })
    }
})




module.exports = router;
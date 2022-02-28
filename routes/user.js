const express = require("express");
const userModels = require("../models/userModels");
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.post('/create', (req, res) => {
    const { username, firstname, lastname, age, password, photoURL } = req.body;
    const user = new userModels({ username, firstname, lastname, age, password, photoURL });
    user.save(err => {
        if (err) throw err;
        res.send("ok");
    })
})

router.post('/login', (eq, res) => {
    const { username, password } = req.body;
    userModels.findOne({ username }, (err, result) => {
        if (err) throw err;
        if (result.password === password) {
            res.send(result)
        } else {
            res.send({ error: 'wrong password' })
        }
    })
})

router.get('/getUser/:id', (req, res) => {
    userModels.findById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

module.exports = router;
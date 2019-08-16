const express = require("express")
const users = express.Router()
const cors = requre('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Users = require("../models.User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('./register',(req, res) => {
    const today = new Date()
    const userData = {
        userid: req.body.userid,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    }
    User.findeOne({
        where: {
            userid:req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User
            })
        }
    })
})
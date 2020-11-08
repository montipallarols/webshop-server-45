const { Router } = require('express')
const { toJWT, toData } = require('../auth/jwt')
const bcrypt = require('bcrypt');
const User = require("../models").user;
const router = new Router()

router.post('/login', async (req, res, next) => {
    const { email , password} = req.body
    if(!email || !password){
        res.status(400).send("missing some info")
        return
    }
    console.log("login with ", email, "password",password)
    const foundUser = await User.findOne({where: { email}})
    
    if(!foundUser) {
        res.status(400).send("user not found")
        return
    }
    if(password !== foundUser.password){
        console.log("Found user password", foundUser.password)
        console.log("Password", password)
        res.send("password was wrong")

    } else {
        const token = toJWT({id: foundUser.id})
    console.log("token", token)

    const checkedToken = toData(token)
    console.log("what is stored in a token", checkedToken)

    res.json({token})
    }
})

module.exports = router
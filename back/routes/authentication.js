const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const db = require('../db/db')
const User = db.User
const { authenticateJwt, secret } = require('../middleware')

router.use(express.json())
router.post("/login", async (req, res) => {
    //res.json("Login request reached here")
    const username = req.body.username;
    const password = req.body.password;
    console.log("hers's username:" + username + "here's password:" + password)
    const user = await User.findOne({ username, password })
    //console.log(user)
    if (user) {
        const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' })
        res.status(301).json({ message: "Login Successful", token })
    }else{
    res.status(404).json({ message: "These credentials don't exist.Please sign up" })
}
})

router.post("/signup", async (req, res) => {
    const { username, password, email, contactAt } = req.body;
    const user = await User.findOne({ username })

    if (user) {
        res.status(401).json({ message: "User with this username already exists" })
    } else {
        const newUser = new User(req.body)
        await newUser.save()
        const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: '1h' })
        res.status(201).json({ message: "User Signed up successfully!", token })
    }

})

router.get("/me",authenticateJwt, async(req,res)=>{
    console.log("the user id is:"+ req.userId)
    const user = await User.findOne({_id:req.userId})
    console.log(user)

    if(user){
        res.status(200).json({username:user.username,isLoggedIn:true,message:"User is in session."})
    }else{
        res.status(400).json({isLoggedIn:false,message:"User hasn't logged in"})
    }
})

module.exports = router
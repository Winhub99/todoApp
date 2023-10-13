const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require('../db/db')

router.use(express.json())
router.post("/login",async (req,res)=>{
    //res.json("Login request reached here")
    const username = req.body.username;
    const password = req.body.password;

    const User =
})

module.exports = router
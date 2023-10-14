const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('../back/routes/authentication')
const todoRoutes = require('../back/routes/todos')
const app = express()
const port = 3000;
app.use(cors())
app.listen(port, console.log("Server listening at port : 3000"))
app.use("/auth", authRoutes)
app.use("/todo", todoRoutes)

mongoose.connect('mongodb+srv://vinod8mehta:vinny@cluster0.yktobi1.mongodb.net/mytodoapp')
app.get("/", (req, res) => {
    res.json("Req served")
})
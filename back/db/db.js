const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    contactAt: Number
})

const todoSchema = mongoose.Schema({
    tittle: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)
const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    User, Todo
}
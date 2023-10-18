const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    contactAt: Number,
    notes:[{type:mongoose.Schema.Types.ObjectId, ref:'Todo'}]
})

const Todo = mongoose.model('Todo', todoSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    User, Todo
}
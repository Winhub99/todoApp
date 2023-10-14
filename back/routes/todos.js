const express = require('express')
const router = express.Router();
const { Todo } = require('../db/db');
const { authenticateJwt } = require('../middleware');
router.use(express.json())
router.post("/addTodo", authenticateJwt, async (req, res) => {
    const todo = new Todo(req.body)
    await todo.save()
    res.status(201).json({ message: "The note is created successfully" })
})

router.get("/getAllTodos", authenticateJwt, async (req, res) => {
    const allNotes = await Todo.find()
    res.status(200).json({ notes: allNotes })
})

router.patch("/markAsDone/:noteId", authenticateJwt, async (req, res) => {
    const { noteId } = req.params;
    const updatedNote = await Todo.findOneAndUpdate({ _id: noteId }, { status: true }, { new: true })
    if (updatedNote) {
        res.status(200).json(updatedNote)
    } else {
        res.json(404).json({ message: "The note was not found" })
    }
})

router.delete("/deleteNote/:noteId", authenticateJwt, async (req, res) => {
    const { noteId } = req.params
    try {
        await Todo.findByIdAndDelete(noteId)
        res.status(200).json({ message: "The note has been deleted." })
    } catch (e) {
        console.log(e)
        res.json({ message: "The request note could not be deleted" })
    }

})

module.exports = router
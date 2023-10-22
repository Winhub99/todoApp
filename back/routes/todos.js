const express = require('express')
const router = express.Router();
const { Todo, User  } = require('../db/db');
const { authenticateJwt } = require('../middleware');
router.use(express.json())
router.post("/addTodo", authenticateJwt, async (req, res) => {
    if(req.body){
        const todo = new Todo(req.body)
        await todo.save()
        await User.findOneAndUpdate({_id:req.userId}, { $push: { notes: todo._id } },{new:true})
        res.status(201).json({ message: "The note is created successfully" })    
    }else{
        res.status(404).json({message:"Empty string paSSed"})
    }
})

router.get("/getAllTodos", authenticateJwt, async (req, res) => {

    const user = await User.find({_id:req.userId}).populate('notes').exec()
    console.log(user[0])
    const allNotes = user[0].notes;
    console.log(allNotes)
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
    const userId = req.userId
    try {
          await Todo.findByIdAndDelete(noteId)
        // console.log(updatedTodos)
        const user = await User.find({_id:req.userId}).populate('notes').exec()
        console.log(user)
        const updatedNotes = user[0].notes
        console.log(updatedNotes)

        res.status(200).json({ message: "The note has been deleted.",todos:updatedNotes })
    } catch (e) {
        console.log(e)
        res.json({ message: "The request note could not be deleted" })
    }

})

module.exports = router
import { Button, Card, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function Todo({ todo ,setTodos }) {

    const [newtodo, setNewtodo] = useState(todo)
    // const [status ,setStatus] = useState(todo.status)

    const done = async (noteId) => {
        const res = await fetch("http://localhost:3000/todo/markAsDone/" + noteId,
            {
                method: "PATCH",
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await res.json();
        console.log(data)
        //  setStatus(data.status)
        setNewtodo(data)
    }

    const deleteNote = async (noteId)=>{
        const res = await fetch("http://localhost:3000/todo/deleteNote/" + noteId,
        {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        }
    )
    const data = await res.json()
    console.log(data.todos)
    setTodos(data.todos)
    }
    return (
        <div>
            <Card variant="outlined" sx={{ width: 300, margin: 5 }} >
                <Typography sx={{ "text-align": "center" }} variant="h4">{newtodo.title}</Typography>
                <Typography variant="subtitle1">{newtodo.description}</Typography>
                {(!newtodo.status) && <Button textalign={"center"} variant="outlined" size="small" onClick={() => { done(todo._id) }}> Done</Button>}
                <IconButton aria-label="delete" size="medium" onClick={()=>{ deleteNote(todo._id)}}>
                    <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
            </Card>
        </div>
    )
}

import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import "./Signin.css"
function AddTodo() {
const navigate = useNavigate()
    //    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

    const addNote = async() => {
        console.log("AddNote called")
        const res = await fetch('http://localhost:3000/todo/addTodo', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                "authorization":"bearer "+ localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description })
        })

        const data = await res.json()
        console.log(data)
        navigate("/showNotes")

    }

    useEffect(() => {
        //      addNote();
    }, [])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
                <div>
                    <Typography textAlign={"center"} variant="h5">Add Note</Typography>
                    <Card className="cardStyle">
                        <TextField className="textFieldStyle" fullWidth label="Title" onChange={(e) => {
                            setTitle(e.target.value)
                        }} />

                        <TextField className="textFieldStyle" fullWidth label="Description" onChange={(e) => {
                            setDescription(e.target.value)
                        }} />
                        <Button variant="contained" color="success" onClick={addNote}>Add Note</Button>
                    </Card>
                </div>
            </div>
        </div>)
}

export default AddTodo;
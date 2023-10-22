import { useEffect, useState } from "react"
import Todo from "./Todo"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
export function Home() {
    const navigate = useNavigate();

    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch("http://localhost:3000/todo/getAllTodos",
                {
                    method: "GET",
                    headers: {
                        "authorization": "Bearer " + localStorage.getItem("token")
                    }
                },
            );
            const data = await res.json()
            console.log(data.notes)
            setTodos((data.notes))

        }
        getTodos();

    }, [])

    if (todos.length === 0) {
        return (<>
            <Button variant="contained" color="success" onClick={() => {
                navigate("/addNote")
            }}>Add Todo</Button>
            <p>loading...</p>
        </>)
    } else {
        return (
            <>
                <div style={{ marginTop: 5 }}>
                    <Button variant="contained" color="success" onClick={() => {
                        navigate("/addNote")
                    }}>Add Todo</Button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {todos.map((todo) => {
                        return <Todo todo={todo} />
                    })}
                </div>


            </>

        )
    }
}
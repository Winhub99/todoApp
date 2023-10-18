import { useEffect, useState } from "react"
import Todo from "./Todo"
export function Home() {

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
            const data =await res.json()
           // console.log(data.notes)    
            setTodos((data.notes))
    
        }
        getTodos();
       
    }, [])

    if(todos.length ===0){
     return (
        <p>loading...</p>
     )                              
    }else{
    return (
        
        <div style={{display:"flex", justifyContent:"center" ,flexWrap:"wrap"}}>
            {todos}
            {/* {todos.map((todo)=>{
               return <Todo todo={todo}/>
            })} */}
        </div>)
}
}
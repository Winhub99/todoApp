import { Typography, Card ,TextField,Button} from '@mui/material'
import './Signin.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
export function Signin() {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const loginHandler = async()=>{
        const res = await fetch('http://localhost:3000/auth/login',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({username,password})
        });
        const data = await res.json()
        console.log(data.token)
        localStorage.setItem("token",data.token)
    }
    return (

        <div style={{ display: 'flex', justifyContent: 'center',marginTop:'125px' }}>
            <div >
                <Typography sx={{marginBottom:'10px'}} variant='h4' textAlign={'center'}> Login</Typography>
                <Card className='cardStyle'>
                    <TextField  className='textFieldStyle'
                     fullWidth id="outlined-basic"
                      label="Username" variant="outlined"
                      onChange={(e)=>{
                        setUsername(e.target.value)
                      }} />
                    <TextField className='textFieldStyle'
                    fullWidth id="outlined-basic" 
                    label="Password"
                    variant="outlined"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                     />
                    <Button className='textFieldStyle'
                     variant="contained"
                      size='large'
                      onClick={loginHandler}>Login</Button>
                      New here? Please <Link to='/signup'>Signup</Link>
                </Card>
            </div>
        </div>
    )
}
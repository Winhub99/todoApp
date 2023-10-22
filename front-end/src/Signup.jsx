import { Typography, Card, TextField, Button } from '@mui/material'
import './Signin.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export function Signup({isLoggedIn, setIsLoggedIn}) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const navigate = useNavigate()

    const signupHandler = async()=>{
            const res = await fetch("http://localhost:3000/auth/signup",{
                method:"POST",
                headers:{
                    'Content-type':'application/json'

                },body:JSON.stringify({username,password,email,contact})
            });

            const data = await res.json();
            if(data.token){
                console.log(data)
                console.log("isLoggedin value before state change: "+ isLoggedIn)
                localStorage.setItem("token",data.token)
                setIsLoggedIn(true)
                console.log("isLoggedin value after state change: "+ isLoggedIn)
                navigate('/showNotes')
            }


    }
    return (

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '125px' }}>
            <div >
                <Typography sx={{ marginBottom: '10px' }} variant='h4' textAlign={'center'}> Sign Up</Typography>
                <Card className='cardStyle'>
                    <TextField className='textFieldStyle'
                        fullWidth id="outlined-basic" label="Username"
                        variant="outlined"
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    <TextField className='textFieldStyle'
                        fullWidth id="outlined-basic"
                        label="Password" variant="outlined"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Email" variant="outlined"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Contact Number" variant="outlined"
                        onChange={(e) => {
                            setContact(e.target.value)
                        }} />

                    <Button className='textFieldStyle' variant="contained" size='large' color='success'
                    onClick={signupHandler}>SignUp</Button>
                </Card>
            </div>
        </div>
    )
}
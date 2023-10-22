import { Typography, Card ,TextField,Button} from '@mui/material'
import './Signin.css'
import { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
export function Signin({isLoggedIn,setIsLoggedIn}) {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginHandler = async()=>{
        const res = await fetch('http://localhost:3000/auth/login',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({username,password})
        });
        const data = await res.json()
        console.log(data)
            
        
        if(res.status === 404){
            setError(data.message)
        }

        if(data.token){
            console.log(data.token)
            console.log("isLoggedin value before state change: "+ isLoggedIn)
            setIsLoggedIn(true)
            console.log("isLoggedin value after state change: "+ isLoggedIn)
            localStorage.setItem("token",data.token)
            navigate("/showNotes")
        }
        
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
                     {error && <div style={{color:"red",marginBottom:"3px"}}>{error}</div>}
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
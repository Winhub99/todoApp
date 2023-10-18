import {AppBar, Button, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'


export function Appbar(){
    const navigate = useNavigate();


    return (
        <div style={{backgroundColor:"#F0D0C3", display:"flex",justifyContent:"space-between" }}>
            <div>
            <Typography sx={{padding:'10px'}}>NoteMaker</Typography>
            </div>
            <div>
            <Button onClick={()=>{
                navigate('/login')
            }}>
                Login
            </Button>
            <Button onClick={()=>{
                navigate('/signup')
            }}>
                SignUp
            </Button>
            </div>
            <AppBar/>   
        </div>
    )
}
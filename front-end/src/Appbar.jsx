import {AppBar, Button, Typography} from '@mui/material'


export function Appbar(){

    return (
        <div style={{backgroundColor:"#F0D0C3", display:"flex",justifyContent:"space-between" }}>
            <div>
            <Typography sx={{padding:'10px'}}>NoteMaker</Typography>
            </div>
            <div>
            <Button>
                Login
            </Button>
            <Button>
                SignUp
            </Button>
            </div>
            <AppBar/>   
        </div>
    )
}
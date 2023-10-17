import { Typography, Card ,TextField,Button} from '@mui/material'
import './Signin.css'
export function Signup() {

    return (

        <div style={{ display: 'flex', justifyContent: 'center',marginTop:'125px' }}>
            <div >
                <Typography sx={{marginBottom:'10px'}} variant='h4' textAlign={'center'}> Sign Up</Typography>
                <Card className='cardStyle'>
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Username" variant="outlined" />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Password" variant="outlined" />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Contact Number" variant="outlined" />

                    <Button className='textFieldStyle' variant="contained" size='large'>SignUp</Button>
                </Card>
            </div>
        </div>
    )
}
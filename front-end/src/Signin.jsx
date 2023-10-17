import { Typography, Card ,TextField,Button} from '@mui/material'
import './Signin.css'
export function Signin() {

    return (

        <div style={{ display: 'flex', justifyContent: 'center',marginTop:'125px' }}>
            <div >
                <Typography sx={{marginBottom:'10px'}} variant='h4' textAlign={'center'}> Login</Typography>
                <Card className='cardStyle'>
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Username" variant="outlined" />
                    <TextField className='textFieldStyle' fullWidth id="outlined-basic" label="Password" variant="outlined" />
                    <Button className='textFieldStyle' variant="contained" size='large'>Login</Button>
                </Card>
            </div>
        </div>
    )
}
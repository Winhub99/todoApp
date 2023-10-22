import { AppBar, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export function Appbar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();
    console.log("isLoggedin value before state change:on Appbar " + isLoggedIn)
    // const handleLogout = () => {
    //     console.log("logout called")
    //     setIsLoggedIn(false)
    //     navigate("/login")
    // }

    return (
        <div style={{ backgroundColor: "#F0D0C3", display: "flex", justifyContent: "space-between" }}>
            <div>
                <Typography sx={{ padding: '10px' }}>NoteMaker</Typography>
            </div>
            <div>
                {isLoggedIn ?
                    <>
                        <Button onClick={() => {
                            console.log("logout called")
                            setIsLoggedIn(false)
                            navigate("/login")
                        }}>
                            Logout
                        </Button>
                    </> :
                    <>
                        <Button onClick={() => { navigate('/login') }}>
                            Login
                        </Button>
                        <Button onClick={() => { navigate('/signup') }}>
                            SignUp
                        </Button>
                    </>}
            </div>
            <AppBar />
        </div>
    )
}
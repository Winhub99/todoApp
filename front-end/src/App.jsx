import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signin } from './Signin'
import { backdropClasses } from '@mui/material'
import { Signup } from './Signup'
import { Appbar } from './Appbar'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      {/* <Signin /> */}
      {/* <Appbar/>
      <Signup/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Signin></Signin>}></Route>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

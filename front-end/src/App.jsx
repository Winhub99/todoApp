import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signin } from './Signin'
import { backdropClasses } from '@mui/material'
import { Signup } from './Signup'
import { Appbar } from './Appbar'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import AddTodo from './AddTodo'
import { Home } from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        {/*<Signup/> */}
      <Router>
      <Appbar/>
        <Routes>
          <Route path='/' element={<Signin></Signin>}></Route>
          <Route path='/login' element={<Signin></Signin>}></Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addNote' element={<AddTodo/>}/>
          <Route path='/showNotes' element={<Home/>}/>
          
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

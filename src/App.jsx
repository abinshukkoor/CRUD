import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'
import Users from './assets/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Create from './Pages/Create Team/Create'
import { Navigate } from 'react-router-dom';
import Code from './Pages/Join Team/Code'
import Join from './Pages/Join Team/Join'
import Teams from './Pages/Incomplete Teams/teams'
import RegisterNew from './Pages/RegisterNew'
import NotFound from './Pages/NotFound';
import './App.css'
import './Register.scss'
import Members from './Pages/TeamDetails/Members';
// import Home from './Home/Home';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/register" />} />
        <Route path='/register' element={<RegisterNew />} />

        {/* Create Team */}
        <Route path='/register/create' element={<Create />} />
        
        {/* Extra route */}  
        <Route path='/register/teams' element={<Teams />} />
        <Route path='/register/members' element={<Members />} />
        

        {/* Join Team */}
        <Route path='/register/code' element={<Code />} />
        <Route path='/register/:id' element={<Join />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App

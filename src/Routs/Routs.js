import React from 'react'
import {  Routes,
    Route, } from 'react-router-dom'
import { Home, Login } from '../pages'
function Routs() {
  return (
    <>
        <Routes>
            <Route  path='/login' element={<Login/>}/>
            <Route index path='/' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default Routs
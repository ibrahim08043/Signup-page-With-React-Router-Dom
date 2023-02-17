import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Home from '../screens/Home'

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
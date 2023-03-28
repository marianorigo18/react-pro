import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import Navbar from "../components/NavbarComponets/Navbar"

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
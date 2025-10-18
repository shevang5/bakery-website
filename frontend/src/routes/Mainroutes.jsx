import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/register'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/home'   element={<Home/>} />
      <Route path='/products'   element={<Products/>} />
      <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} /> 

    </Routes>
  )
}

export default Mainroutes

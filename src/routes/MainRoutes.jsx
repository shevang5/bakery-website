import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Order from '../pages/Order'
import Menu from '../pages/Menu'
import Location from '../pages/Location'
import ProductDetail from '../pages/ProductDetail'
import Additem from '../pages/Additem'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path="/menu/product/:id" element={<ProductDetail />} />
        <Route path='/location' element={<Location/>} />
        <Route path='/additem' element={<Additem/>} />
      </Routes>
    </>
  )
}

export default MainRoutes

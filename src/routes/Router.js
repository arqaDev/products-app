import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import CartList from '../pages/CartList'
import Favorite from '../pages/Favorite'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Home from '../pages/Home'


const Router = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/cart' element={<CartList/>}/>
    <Route path='/favorite' element={<Favorite/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
  </Routes>
}

export default Router
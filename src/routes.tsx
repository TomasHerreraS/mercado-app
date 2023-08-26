import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main.page';
import AllOffersPage from './pages/all-offers.page';
import CreateAccountPage from './pages/create-account.page';
import CartPage from './pages/cart.page';

const RouteByComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/ofertas' element={<AllOffersPage/>}/>
      <Route path='/crear-cuenta' element={<CreateAccountPage/>}/>
      <Route path='/carro' element={<CartPage/>}/>
    </Routes>
  )
}

export default RouteByComponent
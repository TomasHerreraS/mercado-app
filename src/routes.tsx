import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main.page';
import AllOffersPage from './pages/all-offers.page';
import CreateAccountPage from './pages/create-account.page';

const RouteByComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/all-offers' element={<AllOffersPage/>}/>
      <Route path='/crear-cuenta' element={<CreateAccountPage/>}/>
    </Routes>
  )
}

export default RouteByComponent
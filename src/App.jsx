import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Netflix from './pages/Netflix/Netflix';


const App = () => {
  return (
    <BrowserRouter> 
     
      <Routes>
        <Route path='/' element={<Netflix />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

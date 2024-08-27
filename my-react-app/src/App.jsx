import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Networking from './components/Networking'; 
import Events from './components/Events';
import Reunions from './components/Reunions';
import Home from './components/Home'; 


const App = () => {
  const location = useLocation();
  const hideHeaderPaths = ['/signup', '/login'];

  const hideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div>
      <div className="App">
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/networking" element={<Networking />} />
      <Route path="/events" element={<Events />} />
      <Route path="/reunions" element={<Reunions />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;



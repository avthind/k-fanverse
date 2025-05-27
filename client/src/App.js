import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // protected page
import Navbar from './components/Navbar'; // component
import PrivateRoute from './components/PrivateRoute';
import BiasProfile from './pages/BiasProfile'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

         <Route path="/bias-profile" element={<PrivateRoute><BiasProfile /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import Booking from './pages/Booking';
import User from './pages/User';
import NotFount from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFount />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


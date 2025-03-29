import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserPage from './components/pages/UserPage'
import Myprofile from './components/pages/Myprofile';
import Update from './components/pages/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/myprofile/:id" element={<Myprofile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
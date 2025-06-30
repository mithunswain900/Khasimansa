// App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from './pages/Authoritcation'; // Dashboard
import LoginPage from './pages/Authoritcation/login';
import HomePage from './pages/HomePage/HomePage';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary for demo

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
     
     

      {/* Protected Route */}
      <Route 
        path="/" 
        element={isLoggedIn ? <IndexPage /> : <Navigate to="/login" replace />} 
      />

      
      <Route path="/home" element={<HomePage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;

// login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // TODO: Replace with real auth logic (API call)

    try {
      const response = await fetch('http://localhost:8080/api/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();

      if (result.status === 'success') {
        onLogin();
        navigate('/');
      } else {
        alert(result.message || 'Invalid credentials');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

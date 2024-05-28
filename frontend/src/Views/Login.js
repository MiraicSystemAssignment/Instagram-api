import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to access navigation function

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend /api/login endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      console.log(response.data); // Log response from backend

      // Store JWT token in localStorage for authentication
      localStorage.setItem('token', response.data.token);

      // Reset form fields and error state
      setEmail('');
      setPassword('');
      setError('');

      alert('Login successful!');

      // Redirect to homepage1 or protected route after successful login
      navigate('/homepage1'); // Navigate to '/homepage1' route
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='login-card-container'>
      <div className="login-card">
        <div className='login-header'>
          <img src="/ironman-logo.jpg" alt="Logo" className="LogoImg" />
          <p className='login-label'>Login</p>
        </div>
        <form onSubmit={handleLogin}>
          <label className='label-name'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className='label-name'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="login-btn" type="submit">Login</button>
        </form>
        <p>
          If new user,{' '}
          <Link to="/signup" className='registration-link'>
            <strong>register here</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

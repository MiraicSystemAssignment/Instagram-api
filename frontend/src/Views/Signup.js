import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Import CSS file for styling

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send POST request to backend /api/signup endpoint
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });

      console.log(response.data); // Log response from backend

      // Reset form fields and error state
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      alert('User registered successfully!');
      // Redirect to login page after successful registration
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className='signup-card-container'>
      <div className="signup-card">
        <p className='signup-label'>Signup</p>
        <form onSubmit={handleSignup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className='signup-btn'>Signup</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/" className='loginpage-link'>
            <strong>Login here</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

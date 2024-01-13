import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate.push('/login');
  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/users/', {
        username,
        password,
      });

      console.log('Signup successful:', response.data);
      
      // You can handle the signed-up user data here (set state, redirect, etc.)
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
              <div className='mt-3 text-center'>
                <p>Already have an account ?</p>
                <Link to=
                <button onClick={navigateToLogin} className='btn btn-secondary'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;


import React, { useState } from 'react';
import axios from 'axios';
import Navigate from 'react-router-dom';
import './styles/form.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/users/login/', {
                email,
                password,
            });
            console.log('Login successful:', response.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
        } 
    };

    return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="u"
                    value={email}
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
                  Login
                </button>
              </form>
              {/* Conditionally render the "Create Account" button */}
              <div className="mt-3 text-center">
                <p>Don't have an account?</p>
                <Navigate to="/signup">
                  <button className="btn btn-secondary">Create Account</button>
                </Navigate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default LoginForm;
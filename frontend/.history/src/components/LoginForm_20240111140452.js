import React, { useState } from 'react';
import axios from 'axios';
import './styles/form.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const =[isAuthenticated, setIsAuthenticated]
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
        <form className='mt-4 form_style' onSubmit={handleLogin}>
            <div className='form-group'>
                <label>
                    Email:
                    <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

            </div>
            <div className='form-group'>
                <label>
                    Password:
                    <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
    );
};

export default LoginForm;
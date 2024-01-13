import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/users/login/', {
                email,
                password,
            });
            console.log('Login successful:', response.data);

        } catch (error) {
            console.error('Login failed:', error);
        } 
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Email:
                <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type
        </form>
    )
}
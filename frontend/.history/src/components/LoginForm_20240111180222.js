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
        

export default LoginForm;
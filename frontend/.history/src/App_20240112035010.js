import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Switc></Switc>h
        <LoginForm />
        <SignUp />
      </div>
    </Router>
  );
}

export default App;

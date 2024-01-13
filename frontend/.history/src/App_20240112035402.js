import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' Component={LoginForm} exact />
          <Route path='signup' Component={SignUp} />
          <Route path
        </Switch>
      </div>
    </Router>
  );
}

export default App;

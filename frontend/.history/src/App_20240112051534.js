import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' Component={LoginForm} exact />
          <Route path='/signup' Component={SignUp} />
          <Route path='/recipes' Component={RecipeList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

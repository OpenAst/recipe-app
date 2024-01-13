import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={LoginForm} exact />
          <Route path='/signup' Component={SignUp} />
          <Route path='/recipes' Component={RecipeList} />
          <Route path='/recipes/create' Component={}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

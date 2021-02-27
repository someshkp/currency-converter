import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {} from 'react-router-dom';
import ResetPage from './resetpage/reset-password'
import SignUpPage from './signup-page/signup-page'
import HomePage from './home-page/home-page'


function App() { 

  return (
    <BrowserRouter>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/reset-password' component={ResetPage}/>
     <Route  path='/sign-up' component={SignUpPage}/>
  </BrowserRouter>
  );
}

export default App;

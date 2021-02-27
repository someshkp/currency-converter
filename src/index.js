import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResetPage from './resetpage/reset-password'
import SignUpPage from './signup-page/signup-page'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import App from './App';




ReactDOM.render(
  <BrowserRouter>
     <Route exact path='/' component={App}/>
     <Route  path='/reset-password' component={ResetPage}/>
     <Route  path='/signup' component={SignUpPage}/>
  </BrowserRouter>,
  document.getElementById('root')
);

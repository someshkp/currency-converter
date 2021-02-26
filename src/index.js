import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResetPage from './resetpage/reset-password'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import App from './App';




ReactDOM.render(
  <BrowserRouter>
     <Route exact path='/' component={App}/>
     <Route  path='/reset-password' component={ResetPage}/>
  </BrowserRouter>,
  document.getElementById('root')
);

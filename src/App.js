import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResetPage from './resetpage/reset-password'
import SignUpPage from './signup-page/signup-page'
import HomePage from './home-page/home-page'


function App() { 
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoggedInStatus = (status) => {
    setLoggedIn(status)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage loggedIn={loggedIn} updateLoggedInStatus={updateLoggedInStatus}/>
        </Route>
        <Route  path='/reset-password'>
          <ResetPage updateLoggedInStatus={updateLoggedInStatus}/>
        </Route>
        <Route  path='/sign-up' >
          <SignUpPage updateLoggedInStatus={updateLoggedInStatus}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

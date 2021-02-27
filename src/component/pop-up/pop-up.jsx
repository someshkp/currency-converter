import React from 'react';
import SignIn from '../sign-in/sign-in';

import './pop-up.css';

const Popup = ({ loggedIn, updateLoggedInStatus }) => {
  if(!loggedIn) {
    return (
      <div className='popup'>
        <div className='popup-inner'>
            <SignIn updateLoggedInStatus={updateLoggedInStatus} />
        </div>
      </div>
    );
  }
  
  else {
    return null
  }
}


export default Popup;
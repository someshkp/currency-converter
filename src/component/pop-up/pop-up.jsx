import React from 'react';
import SignInAndSignUp from '../sign-in-and-sign-up/sign-in-and-sign-up';

import './pop-up.css';

const Popup = () => {
    return (
      <div className='popup'>
        <div className='popup-inner'>
            <SignInAndSignUp />
        </div>
      </div>
    );
}


export default Popup;
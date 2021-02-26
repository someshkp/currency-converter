import React from 'react';
import './reset-password.css';

import Navbar from '../component/navbar/navbar';

import logo from '../component/img/logo.png';

const ResetPage = () =>(
    
    <div className="reset">
            <img src={logo} alt="logo" />
            <h1>Yo! Forgot Your Password </h1>
            <p>Enter new password.</p>

            <form >
                
                <input 
                type="password"
                className="input-box"
                 placeholder="New Password" 
                 required 
                 />

              
                <input
                 type="password" 
                 className="input-box"
                 placeholder="Confirm Password"
                   required 
                   />
             <button type="button" className="submit-btn">Submit</button>      
      
             </form>
    </div>
   
);


export default ResetPage;
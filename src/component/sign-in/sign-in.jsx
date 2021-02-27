import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignin from '../google-signin/google-signin'
import logo from '../img/logo.png'

import './sign-in.css';

function SignIn({ emailSignInStart }) {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <img src={logo} alt="logo" />
            <h1>Sign In Now</h1>

            <form onSubmit={handleSubmit}>
                
                <input 
                type="email"
                className="input-box"
                 placeholder="Your Email" 
                 onChange={handleChange} 
                 required 
                 />

              
                <input
                 type="password" 
                 className="input-box"
                 placeholder="Password"
                  onChange={handleChange}
                   required 
                   />

                <button type="submit" className="sign-btn">Sign In</button>
            </form>

            <p><Link to="/reset-password" className="sign-link">Forgot password</Link></p>
            <hr/>
            <p className="or">OR</p>
            <Link to="sign-up" className="sign-link mb-1">Sign Up</Link>
            <GoogleSignin />

        </div>
    )
}

export default SignIn;
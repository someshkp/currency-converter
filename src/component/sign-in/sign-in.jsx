import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignin from '../google-signin/google-signin'
import logo from '../img/logo.png'

import './sign-in.css';

function SignIn({ updateLoggedInStatus }) {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const [wrongCredentials, setWrongCredentials] = useState({ state: false, message: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        // Reset Error Message
        setWrongCredentials({state: false, message: ''})

        const res = localStorage.getItem(email)
        if (!res) {
            setWrongCredentials({state: true, message: 'Invalid Email'})
        }
        else if (res !== password) {
            setWrongCredentials({state: true, message: 'Invalid Password'})
        }
        else {
            updateLoggedInStatus(true)
        }
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
                    name="email" 
                    className="input-box"
                    placeholder="Your Email"
                    onChange={handleChange} 
                    required 
                />

              
                <input
                    type="password"
                    name="password" 
                    className="input-box"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                { wrongCredentials.state && <p className="error">{wrongCredentials.message}</p> }

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
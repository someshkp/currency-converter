import React, { useState, useEffect} from 'react';

import SignUp from '../sign-up/sign-up';
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
            <h1>Sign Up Now</h1>

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

                <p><span><input type="checkbox"/></span>I agree to the terms of services</p>
                <button type="button" className="sign-btn">Sign In</button>
                <p><a href="#">Forgot password ?</a></p>
                <hr/>
                <p className="or">OR</p>

                <SignUp/>
                
            </form>


        </div>
    )
}

export default SignIn;
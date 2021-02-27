import { useState } from 'react';
import { Link } from 'react-router-dom'
import './reset-password.css';

import logo from '../component/img/logo.png';

const ResetPage = ({ updateLoggedInStatus }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailPresent, setEmailPresent] = useState(false);
    const [password, setPassword] = useState('');
    const [complete, setComplete] = useState(false);

    function handleEmail(event) {
        event.preventDefault()
        const res = localStorage.getItem(email)
        if(res) {
            setEmailPresent(true)
        } else {
            setEmailPresent(false)
            setEmailError('There is no corresponding email present')
        }
    }

    function handlePassword(event) {
        event.preventDefault()
        localStorage.setItem(email, password)
        updateLoggedInStatus(true)
        setComplete(true)
    }

    return (
        <div className="reset">
            <img src={logo} alt="logo" />
            <h1>Yo! Forgot Your Password </h1>
            {
                !emailPresent ? (
                    <form onSubmit={handleEmail}>
                        <p>Enter Email</p>
                        <input 
                            type="email"
                            name="email"
                            className="input-box"
                            placeholder="Email" 
                            required
                            onChange={ e => setEmail(e.target.value) }
                        />
                        { emailError && <p>{emailError}</p>}
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                ) : (
                    <form onSubmit={handlePassword}>
                        <p>Enter new password</p>
                        <input 
                            type="password"
                            name="password"
                            className="input-box"
                            placeholder="New Password" 
                            required 
                            onChange={ e => setPassword(e.target.value)}
                        />
                    <button type="submit" className="submit-btn">Submit</button>

                    </form>
                )
            }
            { 
                complete && 
                <div>
                    <p>Sucessfully password reseted</p>
                    <Link to="/">Goto home</Link>
                </div>
            }
        </div>
    )
};

export default ResetPage;
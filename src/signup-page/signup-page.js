import { useState } from 'react';
import './signup-page.css';

import logo from '../component/img/logo.png';

const SignUpPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: ''});
  const { email, password } = credentials;
  
  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem(email, password)
  }

  return (
    <div className="signup">
            <img src={logo} alt="logo" />
            <h1>Signup</h1>
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

             <button type="submit" className="submit-btn">Signup</button>
             </form>
    </div>
  );
}
 
export default SignUpPage;
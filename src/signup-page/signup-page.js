import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup-page.css';

import logo from '../component/img/logo.png';

const SignUpPage = ({ updateLoggedInStatus }) => {
  const [credentials, setCredentials] = useState({ email: '', password: ''});
  const [emailExist, setEmailExist] = useState(false);
  const { email, password } = credentials;
  const history = useHistory()

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem(email, password)
    updateLoggedInStatus(true)
    history.push('/')
  }

  const checkEmailExists = () => {
    if(localStorage.getItem(email)) {
      setEmailExist(true)
    }
    else {
      setEmailExist(false)
    }
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
          onBlur={checkEmailExists} 
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
        {emailExist && <p className="error">This Email already exist</p>}
        <button type="submit" className="submit-btn" >Signup</button>
      </form>
    </div>
  );
}
 
export default SignUpPage;
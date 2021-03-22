import React , {useState} from 'react';
import { useHistory} from 'react-router-dom';
import './SignUp.css';



function SignUp() {
  const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'email@email.com',
        password: 'password123'
    }

    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
        history.push('/Dashboard');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
}

 
  return (
     
    <div className="login-page">
    <h2>Login In</h2>
    <form autoComplete="off" onSubmit={handleLoginSubmit}>
        <div className="form-group">
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={emailInput}
            onChange={handleEmailChange}
            />
        </div><br/><br/>
        <div className="form-group">
            <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordInput}
            onChange={handlePasswordChange}
            />
        </div><br/><br/>
        <button type="submit" className="btn btn-primary">
            Log In
        </button>
  </form>
</div>
   
  );
}



export default SignUp;
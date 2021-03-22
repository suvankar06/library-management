import React from 'react';
import { useHistory} from 'react-router-dom';
import './SignUp.css';
//import './Dashboard';
//import axios from 'axios';
//import { setUserSession } from './Utils/Common';



function SignUp() {
/*  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.get('http://localhost:3000/Login', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }*/
  let history = useHistory();

  const redirect = () => {
    history.push('/Dashboard')
  }

  return (
     
    <form className='login-container'>
      <div className='heading'>LOG IN HERE!!!</div><br/><br/>
      <label>
      <h3> UserName</h3>
       <br/> <input type="text" className='login-input' name="name" placeholder='enetr your username' />
     </label><br/><br/>
     <label>
      <h3>Password</h3> 
        <br/><input type="text"  className='login-input' name="name" placeholder='enter your password' />
     </label><br/><br/>
      <button  onClick={redirect}>Log In</button>
    </form>
   
  );
}

/*const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}*/

export default SignUp;
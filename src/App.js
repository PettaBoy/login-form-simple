import React, { useState } from 'react'
import LoginForm from './components/login.component'

//create function to handle login form
function App() {
  //declare state for user and error
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const [error, setError] = useState('');

  //time to create function for validation of email
  let regex = new RegExp('[A-Za-z0-9]+@[A-Za-z0-9]+.com');

  const useEmailValidation = (email) => {
    const isEmailValid = regex.test(email); // use any validator you want
    return isEmailValid;
  };

  //create function for login
  const Login = details => {
    console.log(details);
    if (useEmailValidation(details.email)) {
      console.log('Login Successful');
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log('Invalid email format');
      setError('Invalid email format');
    }
  }
  
  //create function for logout
  const Logout = () => {
    setUser({name: '', email: '', password: ''});
    console.log('logged out');
  }

  //write html code with react function
  return(
    <div className="App">
      {(user.email !== "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App
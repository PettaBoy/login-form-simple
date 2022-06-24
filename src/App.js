import React, { useState } from 'react'
import LoginForm from './components/login.component'

function App() {
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const [error, setError] = useState('');

  let regex = new RegExp('[A-Za-z0-9]+@[A-Za-z0-9]+.com');

  const Login = details => {
    console.log(details);
    if (regex.test(details.email)) {
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

  const Logout = () => {
    setUser({name: '', email: '', password: ''});
    console.log('logged out');
  }
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
// Login.js
import React, { useState } from 'react';
import './Styles.css/Login.css'; // Import CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login with:', username, password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

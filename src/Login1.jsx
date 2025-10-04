import React from "react";

import { useState } from "react";

function Dashboard({ onLogout }) {
  return (
    <div>
                  <h2>Welcome to the Dashboard</h2>         
      <button onClick={onLogout}> Logout </button>     
    </div>
  );
}

function LoginForm({ onLogin }) {
  return (
    <div>
                  <h2>Login</h2>         
      <button onClick={onLogin}> Log In </button>   
    </div>
  );
}

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
               
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
           
    </div>
  );
};

export default Login;

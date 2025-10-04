import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const username = useRef();
  const password = useRef();

  const btn = () => {
    const user = username.current.value;
    const pass = password.current.value;
    document.getElementById(
      "output"
    ).innerText = `Username: ${user} | Password: ${pass}`;
  };

  return (
    <div id="mainpage">
      <div id="loginPage">
        <h1 id="title">Login Form</h1>
        Username: <input type="text" placeholder="Username" ref={username} />
        <br />
        <br />
        Password:{" "}
        <input type="password" placeholder="Password" ref={password} />
        <br />
        <br />
        <button id="btn" onClick={btn}>
          Login
        </button>
        <p id="output"></p>
      </div>
    </div>
  );
};

export default Login;

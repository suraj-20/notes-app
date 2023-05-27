import React from "react";
import "../Login/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form_container">
        <h2>Login</h2>
        <hr />
        <form>
          <div>
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="username mb-3"
              placeholder="Enter Username"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="passwrod mb-3"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>

          <div class="mt-3 mb-2">
            <button class="btn btn-primary" type="button">
              Login
            </button>
          </div>

          <div className="signIn">
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

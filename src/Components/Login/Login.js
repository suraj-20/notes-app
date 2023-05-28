import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggedUser.email && input.password === loggedUser.password){
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("worng credential!");
    }
  }

  return (
    <div className="container">
      <div className="form_container">
        <h2>Login</h2>
        <hr />
        <form>
          <div>
            <label htmlFor="inputUsername" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
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
            name="password"
            value={input.password}
            onChange={(e) => {
              setInput({
                ...input, [e.target.name]: e.target.value,
              })
            }}
              type="password"
              className="passwrod mb-3"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div>
            <Link to="/login">Forgot Password?</Link>
          </div>

          <div className="mt-3 mb-2">
            <button className="btn btn-primary" type="button"  onClick={handleSubmit}>
              Login
            </button>
          </div>

          <div className="signIn">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === "" && input.email === "" && input.password === "") {
      alert("Enter the required field");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="form_container">
          <h2>Sign Up</h2>
          <hr />
          <form>
            <div>
              <label htmlFor="inputUsername" className="form-label">
                Username
              </label>
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="text"
                className="username mb-3"
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label htmlFor="inputUsername" className="form-label">
                Email
              </label>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="email"
                className="email mb-3"
                placeholder="Enter Email"
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
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="password"
                className="passwrod mb-3"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div>
              <Link to="/register">Forgot Password?</Link>
            </div>

            <div className="mt-3 mb-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>

            <div className="signIn">
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

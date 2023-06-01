import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = ({ handleToggleDarkMode }) => {
  const [showSidebar, setShowSidebar] = useState();
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const signInPage = () => {
    navigate("/login");
  };

  const signUpPage = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2 className="heading">Notes</h2>
        </div>

        <i
          class="fa-solid fa-circle-half-stroke toggler-in-small-screen"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        ></i>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <i className="fa-sharp fa-solid fa-bars"></i>
        </button>

        {showSidebar ? (
          <div className="sidebar">
            <div className="nav-item">
              <div className="d-flex gap-3 buttons">
                {loggedIn ? (
                  <p>{userName.name}</p>
                ) : (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={signInPage}
                  >
                    Sign In
                  </button>
                )}

                {loggedIn ? (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={signUpPage}
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : null}

        <div className="nav-items">
          <div className="d-flex gap-3 buttons">
            {loggedIn ? (
              <p>{userName.name}</p>
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                onClick={signInPage}
              >
                Sign In
              </button>
            )}

            {loggedIn ? (
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                onClick={signUpPage}
              >
                Sign Up
              </button>
            )}
            <i
              class="fa-solid fa-circle-half-stroke"
              onClick={() =>
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
              }
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

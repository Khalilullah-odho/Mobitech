import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Mobitech
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar-link"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/brands"
                activeClassName="active"
                className="navbar-link"
                onClick={handleClick}
              >
                Brands
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="navbar-link"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            {user && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                  className="login-btn"
                >
                  {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <NavLink
                    className="dropdown-item"
                    to="/admin-panel"
                    onClick={handleClick}
                  >
                    Admin Dashboard
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Profile
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/logout"
                    onClick={handleClick}
                  >
                    Log Out
                  </NavLink>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {!user && (
              <li>
                <NavLink to="/login">
                  <Button
                    variant="primary"
                    className="login-btn"
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                </NavLink>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

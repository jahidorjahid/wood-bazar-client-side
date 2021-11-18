import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import useAuth from "../../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, isLoading, logout } = useAuth();

  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <a href="mailto:support@gmail.com">
                    <i className="icofont-support-faq mr-2"></i>
                    support@woodbazar.com
                  </a>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2"></i>Address Ta-134/A,
                  New York, USA{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar d-flex justify-content-end mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>Call Now : </span>
                  <span className="h4">823-4565-13456</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" className="img-fluid" />
          </NavLink>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div
            className={
              {
                /* "collapse navbar-collapse" */
              }
            }
            id="navbarmain"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              {user?.email ? (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle nav-user-link"
                    to="/dashboard"
                    id="userDropdown"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user?.displayName}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Go to dashboard
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout} className="dropdown-item" to="/">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

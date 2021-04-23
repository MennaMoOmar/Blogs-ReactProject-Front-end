import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="./images/logo2.png"
              alt="logo"
            ></img>
            <span className="navBar__span">Blogs</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navBar__middle collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexDirection: "column" }}
          >
            <ul className="navBar__list navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link navBar__list__item__link--active nav-link"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/blogs"
                >
                  BLOGS
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/contactUs"
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="navBar__button btn">
            <NavLink className="navBar__button__link nav-link" to="/loginpage">
              LOGIN
            </NavLink>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

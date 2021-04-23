import React from "react";
import { NavLink } from "react-router-dom";

import Login from "./login";

const Loginpage = () => {
  return (
    <React.Fragment>
      <div className="loginpage">
        <div className="loginpage__wrapper">
          <div className="container">
            <div className="row">
              <div className="loginpage__login col-lg-6">
                <Login></Login>
                <p className="loginpage__login__register">
                  <NavLink className="loginpage__login__register__link"
                    to="/registerpage"
                  >
                    Create new account
                  </NavLink>
                </p>
              </div>
              <div className="loginpage__image col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loginpage;

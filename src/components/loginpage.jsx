import React from "react";

import Login from "./login";
import Register from "./register";

const Home = () => {
  return (
    <React.Fragment>
      <div className="loginpage">
        <div className="loginpage__wrapper">
          <div className="container">
            <div className="row">
              <div className="loginpage__login col-lg-6">
                <Login></Login>
                {/* <p>Create new account</p> */}
              </div>
              <div className="loginpage__image col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

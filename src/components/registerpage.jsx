import React from "react";

import Register from "./register";

const Home = () => {
  return (
    <React.Fragment>
      <div className="registerpage">
        <div className="registerpage__wrapper">
          <div className="container">
            <div className="row">
              <div className="registerpage__register col-lg-6">
                <Register></Register>
                {/* <p>Create new account</p> */}
              </div>
              <div className="registerpage__image col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

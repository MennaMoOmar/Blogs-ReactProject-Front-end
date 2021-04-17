import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <h2 className="login__header">login</h2>
          <div className="login__frmwrapper">
            <form className="login__form" action="">
                {/* email */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              {/* password */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <button className="login__form__login blogs__morebtn button is-rounded">Login</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

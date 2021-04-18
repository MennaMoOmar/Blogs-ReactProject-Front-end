import React from "react";

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const Register = () => {
  return (
    <React.Fragment>
      <div className="register">
        <div className="container">
          <h2 className="register__header">Register</h2>
          <div className="register__frmwrapper">
            <form className="register__form" action="">
              {/* first name */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              {/* lastname */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              {/* phone */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="number" placeholder="Phone" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
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
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              {/* confirm password */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              {/* image */}
              <div class="is-info">
                <label class="file-label">
                  <input class="file-input" type="file" name="image" />
                  <span class="register__form__image file-cta">
                    <span class="file-icon">
                      {/* <i class="fas fa-upload"></i> */}
                      <PhotoCameraIcon></PhotoCameraIcon>
                    </span>
                    <span class="file-label">Upload Image</span>
                  </span>
                </label>
              </div>
              {/* button */}
              <button className="register__form__register blogs__morebtn button is-rounded">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;

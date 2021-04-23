import React, { useState } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";
import { useHistory } from "react-router";

import { register } from "./../actions";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const Register = (props) => {
  
  /* history */
  const history = useHistory();

  /* hooks */
  const [username2] = useState();
  const [password2] = useState();
  const [firstname] = useState();
  const [lastname] = useState();
  const [phone] = useState();
  const [errors, setErrors] = useState({
    username2,
    password2,
    firstname,
    lastname,
    phone,
  });
  const [user, setuser] = useState({
    username2,
    password2,
    firstname,
    lastname,
    phone,
    errors,
  });

  /* schema */
  const schema = {
    username2: joi.string().email().required(),
    password2: joi.string().required().min(6),
    firstname: joi.string().alphanum().min(3).max(10).required(),
    lastname: joi.string().alphanum().min(3).max(10).required(),
    phone: joi.number().required().min(6),
  };

  /* validate */
  const validate = () => {
    const errors = {};
    const urs = { ...user };
    const urs2 = {
      username2: urs.username2,
      password2: urs.password2,
      firstname: urs.firstname,
      lastname: urs.lastname,
      phone: urs.phone,
      errors: urs.errors,
    };
    delete urs2.errors;
    const res = joi.validate(urs2, schema, { abortEarly: false });
    if (res.error === null) {
      setErrors({});
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    setErrors(errors);
    return errors;
  };

  /* handleChangeUsername */
  let handleChangeUsername = (e) => {
    setuser({
      username2: e.target.value,
      password2: user.password2,
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      errors: errors,
    });
  };
  /* handleChangePassword2 */
  let handleChangePassword = (e) => {
    setuser({
      username2: user.username2,
      password2: e.target.value,
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      errors: errors,
    });
  };
  /* handleChangePassword2 */
  let handleChangeFirstname = (e) => {
    setuser({
      username2: user.username2,
      password2: user.password2,
      firstname: e.target.value,
      lastname: user.lastname,
      phone: user.phone,
      errors: errors,
    });
  };
  /* handleChangePassword2 */
  let handleChangeLastname = (e) => {
    setuser({
      username2: user.username2,
      password2: user.password2,
      firstname: user.firstname,
      lastname: e.target.value,
      phone: user.phone,
      errors: errors,
    });
  };
  /* handleChangePassword2 */
  let handleChangePhone = (e) => {
    setuser({
      username2: user.username2,
      password2: user.password2,
      firstname: user.firstname,
      lastname: user.lastname,
      phone: e.target.value,
      errors: errors,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onRegister(
      user.username2,
      user.password2,
      user.firstname,
      user.lastname,
      user.phone
    );
    const errorr = validate();
    if (errorr) return;
    history.push('/blogs')
  };

  return (
    <React.Fragment>
      <div className="register">
        <div className="container">
          <h2 className="register__header">Register</h2>
          <div className="register__frmwrapper">
            <form className="register__form" action="" onSubmit={submitHandler}>
              {/* first name */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChangeFirstname}
                    value={firstname}
                    id="firstname"
                    name="firstname"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.firstname && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.fisrtname && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.firstname && (
                  <div className="text-danger">{errors.firstname}</div>
                )}
              </div>
              {/* lastname */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChangeLastname}
                    value={lastname}
                    id="lastname"
                    name="lastname"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.lastname && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.lastname && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.lastname && (
                  <div className="text-danger">{errors.lastname}</div>
                )}
              </div>
              {/* phone */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="number"
                    placeholder="Phone"
                    onChange={handleChangePhone}
                    value={phone}
                    id="phone"
                    name="phone"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.phone && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.phone && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.phone && (
                  <div className="text-danger">{errors.phone}</div>
                )}
              </div>
              {/* email */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    onChange={handleChangeUsername}
                    value={username2}
                    id="username2"
                    name="username2"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.username2 && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.username2 && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.username2 && (
                  <div className="text-danger">{errors.username2}</div>
                )}
              </div>
              {/* password2 */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={password2}
                    id="password2"
                    name="passwprd"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.password2 && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.password2 && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.password2 && (
                  <div className="text-danger">{errors.password2}</div>
                )}
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
              <div className="is-info">
                <label className="file-label">
                  <input className="file-input" type="file" name="image" />
                  <span className="register__form__image file-cta">
                    <span className="file-icon">
                      {/* <i className="fas fa-upload"></i> */}
                      <PhotoCameraIcon></PhotoCameraIcon>
                    </span>
                    <span className="file-label">Upload Image</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (username2, password2, firstname, lastname, phone) =>
      dispatch(register(username2, password2, firstname, lastname, phone)),
  };
};

export default connect(null, mapDispatchToProps)(Register);

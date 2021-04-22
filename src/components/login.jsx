import React, { useState } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";

import { authStart, auth } from "./../actions";

const Login = (props) => {
  const [username] = useState();
  const [password] = useState();
  const [errors, setErrors] = useState({ username, password });
  const [user, setuser] = useState({
    username,
    password,
    errors,
  });

  const schema = {
    username: joi.string().email().required(),
    password: joi.string().required().min(6),
  };

  /* validate */
  const validate = () => {
    const errors = {};
    const urs = { ...user };
    const urs2 = {
      username: urs.username,
      password: urs.password,
      errors: urs.errors,
    };
    delete urs2.errors;
    const res = joi.validate(urs2, schema, { abortEarly: false });
    // console.log(res);
    if (res.error === null) {
      setErrors({});
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    setErrors(errors);
    // console.log(errors)
    return errors;
  };

  /* input */
  let handleChangeUsername = (e) => {
    setuser({
      username: e.target.value,
      password: user.password,
      errors: errors,
    });
    console.log(user);
    console.log(user.password);
  };
  let handleChangePassword = (e) => {
    setuser({
      username: user.username,
      password: e.target.value,
      errors: errors,
    });
    console.log(user);
    console.log(user.username);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(user)
    // console.log(props)
    const errorr = validate();
    if (errorr) return;
    console.log(errorr);
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <h2 className="login__header">login</h2>
          <div className="login__frmwrapper">
            <form className="login__form" action="" onSubmit={submitHandler}>
              {/* email */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    onChange={handleChangeUsername}
                    value={username}
                    id="username"
                    name="username"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {!errors.password && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.password && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}
              </div>
              {/* password */}
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={password}
                    id="password"
                    name="passwprd"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    {/* <i className="fas fa-check"></i> */}
                    {!errors.password && (
                      <i className="fas fa-check text-success"></i>
                    )}
                    {errors.password && (
                      <i className="fas fa-times text-danger"></i>
                    )}
                  </span>
                </p>
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <button className="login__form__login blogs__morebtn button is-rounded">
                Login
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
    onAuth: (username, password) => dispatch(auth(username, password)),
  };
};
export default connect(null, mapDispatchToProps)(Login);

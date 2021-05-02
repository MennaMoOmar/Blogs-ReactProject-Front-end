// import axios from "axios";
import { toast } from "react-toastify";

import db from "../apis/db";

export const authStart = () => {
  return {
    type: "AUTH_START",
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: "AUTH_SUCCESS",
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: "AUTH_FAIL",
    payload: error,
  };
};

export const logout = () => {
  return {
    type: "AUTH_LOGOUT",
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const auth = (username, password) => async (dispatch) => {
  dispatch(authStart());
  const authdata = {
    username: username,
    password: password,
    token: true,
  };
  try {
    const response = await db.post("/user/login", authdata);
    dispatch(authSuccess(response.data.token, response.data.user._id));
    dispatch(checkAuthTimeout(3600 * 1000)); //logout after 1h
    localStorage.setItem("token", response.data.token);
    toast.success("Login Successfully", {
      autoClose: 1500,
    });
  } catch (err) {
    toast.error("Wrong Username or Password!");
    console.log(err.response.data.error);
    dispatch(authFail(err.response.data.err));
  }

  // axios
  //   .post("https://menna-news-backend.herokuapp.com/user/login", authdata)
  //   .then((response) => {
  //     dispatch(authSuccess(response.data.token, response.data.user._id));
  //     dispatch(checkAuthTimeout(3600 * 1000)); //logout after 1h
  //     localStorage.setItem("token", response.data.token);
  //     toast.success("Login Successfully");
  //   })
  //   .catch((err) => {
  //     toast.error("Wrong Username or Password!");
  //     console.log(err.response.data.error);
  //     dispatch(authFail(err.response.data.error));
  //   });
};

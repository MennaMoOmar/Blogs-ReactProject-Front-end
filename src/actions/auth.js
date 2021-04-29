import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// import db from '../apis/db';

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
  // console.log(authdata)

  axios
    .post("http://localhost:3001/user/login", authdata)
    .then((response) => {
      dispatch(authSuccess(response.data.token, response.data.user._id));
      dispatch(checkAuthTimeout(3600 * 1000)); //logout after 1h
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successfully");
    })
    .catch((err) => {
      toast.error("Wrong Username or Password!");
      console.log(err.response.data.error);
      dispatch(authFail(err.response.data.error));
    });

  // try{
  //     const response = await db.post('/user/login', authdata);
  //     console.log(response)
  //     dispatch(authSuccess(response.data.idToken, response.data.localId))
  // }
  // catch(err){
  //     console.log(err)
  //     console.log(err.response.data.error.errors)
  //     dispatch(authFail(err))
  // }
};

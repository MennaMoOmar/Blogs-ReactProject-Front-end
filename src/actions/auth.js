import axios from "axios";

// import db from '../apis/db';

export const authStart = () => {
    return{
        type: "AUTH_START"
    }
}

export const authSuccess = (authdata) => {
    return{
        type: "AUTH_SUCCESS",
        payload: authdata
    }
}

export const authFail = (error) => {
    return{
        type: "AUTH_FAIL",
        payload: error
    }
}

export const auth = (username, password) => (dispatch) => {
    dispatch(authStart());
    const authdata = {
        username: username,
        password:password,
        token: true
    };
    console.log(authdata)
    axios.post("http://localhost:3001/user/login", authdata)
    .then (response => {
        console.log(response)
        dispatch(authSuccess(response.data))
    })
    .catch(err=>{
        console.log(err)
        dispatch(authFail(err))
    })
}
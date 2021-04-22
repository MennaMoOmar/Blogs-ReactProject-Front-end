// import axios from "axios";

import db from '../apis/db';

export const authStart = () => {
    return{
        type: "AUTH_START"
    }
}

export const authSuccess = (token, userId) => {
    return{
        type: "AUTH_SUCCESS",
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return{
        type: "AUTH_FAIL",
        payload: error
    }
}

export const auth = (username, password) => async (dispatch) => {
    dispatch(authStart());
    const authdata = {
        username: username,
        password:password,
        token: true
    };
    console.log(authdata)
    try{
        const response = await db.post('/user/login', authdata);
        console.log(response)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
    }
    catch(err){
        console.log(err)
        dispatch(authFail(err))
    }

    // axios.post("http://localhost:3001/user/login", authdata)
    // .then (response => {
    //     console.log(response)
    //     dispatch(authSuccess(response.data))
    // })
    // .catch(err=>{
    //     console.log(err)
    //     dispatch(authFail(err))
    // })
}
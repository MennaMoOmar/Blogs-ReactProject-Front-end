import db from '../apis/db';

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
}
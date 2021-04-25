import db from '../apis/db';

export const register = (username, password, firstname, lastname, phone) => async (dispatch) => {
    const regdata = {
        username: username,
        password:password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
    };
    // console.log(regdata)
    try{
        const response = await db.post('/user', regdata);
        // console.log(response)
        dispatch({type:"REGISTER",payload: response.data});
    }
    catch(err){
        console.log(err)
    }
}


// import db from '../apis/db';

// export const regStart = () => {
//     return{
//         type: "REG_START"
//     }
// }

// export const regSuccess = (regdata) => {
//     return{
//         type: "REG_SUCCESS",
//         succsess: "false",
//         payload: regdata
//     }
// }

// export const regFail = (error) => {
//     return{
//         type: "REG_FAIL",
//         payload: error
//     }
// }

// export const register = (username, password, firstname, lastname, phone) => async (dispatch) => {
//     dispatch(regStart());
//     const regdata = {
//         username: username,
//         password:password,
//         firstname: firstname,
//         lastname: lastname,
//         phone: phone,
//     };
//     console.log(regdata)
//     try{
//         const response = await db.post('/user', regdata);
//         console.log(response)
//         dispatch(regSuccess(response.data))
//     }
//     catch(err){
//         console.log(err)
//         dispatch(regFail(err))
//     }
// }
import db from '../apis/db';

export const getAllUsers = () => async dispatch => {
    const responce = await db.get('/user');
    // console.log(responce.data)
    dispatch({type:"GET_ALL_USERS",payload: responce.data});
}
import db from '../apis/db';

export const getUserById = (userId) => async (dispatch) => {
    const responce = await db.get(`/user/${userId}`);
    // console.log(responce.data)
    dispatch({type:"GET_USER_BY_ID" , payload:responce.data});
}
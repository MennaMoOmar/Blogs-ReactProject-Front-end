import db from '../apis/db';

export const getUserById = (userId) => async (dispatch,getState) => {
    const responce = await db.get(`/user/${userId}`);

    dispatch({type:"GET_USER_BY_ID" , payload:responce.data});
}

// export default getUserById;
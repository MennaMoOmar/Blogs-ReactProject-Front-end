import db from '../apis/db';

export const getAllPostsByUserId = (userId) => async (dispatch) => {
    const responce = await db.get(`/post/user/${userId}`);
    // console.log(responce.data)
    dispatch({type:"GET_POSTS_USER_ID" , payload:responce.data});
}
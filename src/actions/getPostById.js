import db from '../apis/db';

export const getPostById = (PostId) => async (dispatch) => {
    const responce = await db.get(`/post/${PostId}`);
    // console.log(responce.data)
    dispatch({type:"GET_POST_BY_ID" , payload:responce.data});
}
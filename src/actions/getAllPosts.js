import db from '../apis/db';

export const getAllPosts = () => async dispatch => {
    const responce = await db.get('/post');
    // console.log(responce.data)
    dispatch({type:"GET_ALL_POSTS",payload: responce.data});
}

// export default getAllPosts;
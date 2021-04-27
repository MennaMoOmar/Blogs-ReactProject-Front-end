import db from '../apis/db';

export const deletePost = (postId) => async (dispatch) => {
    console.log(postId)
      
    try{
        const response = await db.delete(`/post/${postId}`);
        console.log(response.data)
        dispatch({type:"DELETE_POST",payload: response.data});
    }
    catch(err){
        console.log(err)
    }
}
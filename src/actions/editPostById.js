import db from '../apis/db';

export const editPost = (token, postId, title, body) => async (dispatch) => {
    console.log(body)
    const editdata = {
        title: title,
        body: body,    
    };
    console.log(editdata)
    
    const headerData = {
        headers: {
          'Authorization': token,
          'Accept': "application/json",
          'Content-Type': "application/json"
        },
      };
      
    try{
        const response = await db.patch(`/post/${postId}`, editdata, headerData);
        console.log(response.data)
        dispatch({type:"EDIT_POST",payload: response.data});
    }
    catch(err){
        console.log(err)
    }
}
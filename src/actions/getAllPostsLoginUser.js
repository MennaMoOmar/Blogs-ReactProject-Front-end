import db from "../apis/db";

export const getAllPostsLoginUser = (token) =>
  async (dispatch) => {
    // console.log(token);
    const headerData = {
      headers: {
        'Authorization': token,
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
    };
    const response = await db.get("/post/allPosts", headerData);
    // console.log(response);
    dispatch({ type: "GET_POSTS_LOGIN", payload: response.data });
  };

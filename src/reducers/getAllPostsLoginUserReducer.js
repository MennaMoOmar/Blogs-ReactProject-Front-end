const getPostsLoginUserReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_POSTS_LOGIN":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default getPostsLoginUserReducer;
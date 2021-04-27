const deletePostByIdReducer = (state = [], action) => {
    switch (action.type) {
      case "DELETE_POST":
        return state.filter(p => p._id !== action.payload._id)
      default:
        return state;
    }
  };
  
  export default deletePostByIdReducer;
  
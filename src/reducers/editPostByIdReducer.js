const editPostByIdReducer = (state = [], action) => {
    switch (action.type) {
      case "EDIT_POST":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default editPostByIdReducer;
  
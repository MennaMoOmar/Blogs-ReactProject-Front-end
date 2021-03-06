const editProfileReducer = (state = [], action) => {
  switch (action.type) {
    case "EDIT_PROFILE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default editProfileReducer;

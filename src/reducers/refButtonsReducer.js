export const refBtnLogin = (state = null, action) => {
  switch (action.type) {
    case "REF_LOGIN":
    //   return [...state, ...action.payload];
      return action.payload
    default:
      return state;
  }
};

export const refBtnLogout = (state = null, action) => {
  switch (action.type) {
    case "REF_LOGOUT":
    //   return [...state, ...action.payload];
    return action.payload
    default:
      return state;
  }
};

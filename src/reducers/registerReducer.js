const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const regStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const regSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const regFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG_START":
      return regStart(state, action);
    case "REG_SUCCESS":
      return regSuccess(state, action);
    case "REG_FAIL":
      return regFail(state, action);
    default:
      return state;
  }
};

export default reducer;
